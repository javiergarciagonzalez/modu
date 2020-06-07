const path = require('path');

const isProduction = process.env.ENV_BUILD === 'production';
const envMode = isProduction ? 'production' : 'development';
const contentBase = path.resolve(__dirname, './dist');
const defaultEntries = [path.resolve(__dirname, 'src/index.tsx')];

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './../public/index.html'
});

const publicPath = '/';

module.exports = {
    mode: envMode,
    optimization: {
        minimize: isProduction
    },
    entry: {
        main: defaultEntries
    },
    output: {
        path: contentBase,
        filename: '[name].bundle.js',
        publicPath,
        sourceMapFilename: '[name].bundle.js.map'
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        disableHostCheck: true,
        proxy: {
            '/*/': 'http://localhost:3000'
        },
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: 'awesome-typescript-loader',
                include: [/src/],
                exclude: [/node_modules/]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                },
                include: [/src/],
                exclude: [/node_modules/]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            },
            {
                test: /\.(webp|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    plugins: [htmlPlugin]
};
