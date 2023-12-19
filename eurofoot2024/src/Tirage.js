import React, { useEffect, useState, useRef } from 'react';

import './App.css'



export function Tirage() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.code}>{item.name}</div>
            ))}
        </div>
    );
}

