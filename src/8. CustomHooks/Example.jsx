import React, { useState, useEffect } from 'react'

const url = 'https://covid19.mathdro.id/api/countries/Indonesia';
const Example = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);
    console.log(data)
    return (
        <div>
            <h2>{loading ? 'loading...' : 'data'}</h2>
            <h1>Confirmed: {data.confirmed.value}</h1>
        </div>
    )
}

export default Example;
