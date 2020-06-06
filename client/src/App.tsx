import React, { useEffect, useState } from 'react';

export default function App () {

    const [foo, setFoo] = useState('');

    useEffect(() => {
        let bar = 'loading...';
        async function fetchdata() {
            // Foo it's just a test for testing API requests
            setFoo(bar);
            const response = await fetch('http://localhost:3000/api/ping');
            const result = await response.text();
            setFoo(result);
        }

        fetchdata();
    }, []);
return <p>Hey, I'm Mobu - frontend = {foo}</p>
}