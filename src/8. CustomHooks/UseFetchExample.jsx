import React from 'react';
import { useFetch } from './useFetch';
import './CustomHooks.css';

const url = 'https://covid19.mathdro.id/api/countries/Indonesia';

const UseFetchExample = () => {
    const {loading, data} = useFetch(url);
    const {confirmed, deaths, recovered} = data;
    console.log(confirmed, deaths, recovered)
    return (
        <div className="container">
            <h1>{loading ? 'loading...' : ''}</h1>
            <h2>Data Korban Corona di Indonesia</h2>
            <div className="item-wrap">
                <div className="item">
                    <h3>POSITIF</h3>
                    <p>{confirmed.value}</p>
                </div>
                <div className="item">
                    <h3>MENINGGAL</h3>
                    <p>{deaths.value}</p>
                </div>
                <div className="item">
                    <h3>SEMBUH</h3>
                    <p>{recovered.value}</p>
                </div>
            </div>
        </div>
    )
}

export default UseFetchExample;
