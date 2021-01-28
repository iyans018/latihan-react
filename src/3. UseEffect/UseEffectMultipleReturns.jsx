import React, { useState, useEffect } from 'react';
import './UseEffect.css';

const url = 'https://api.github.com/users/brynary';

function UseEffectMultipleReturns() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [users, setUsers] = useState('default user');

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if(resp.status >= 200 && resp.status <= 299){
                    return resp.json()
                } else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(resp.statusText)
                }
            })
            .then((user) => {
                // const { name, location, avatar_url } = user;
                // setUsers({name, location, avatar_url});
                setUsers(user)
                setIsLoading(false)
            })
            .catch((error) => console.log(`${error} Url API salah cuk!`))
    }, []);

    if(isLoading) {
        return (
            <div className="container">
                <h2 style={{textAlign:'center', marginTop:'35%'}}>Loading...</h2>
            </div>
        )
    }

    if(isError) {
        return (
            <div className="container">
                <h1 style={{textAlign:'center', marginTop:'35%'}}>ERROR 404</h1>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="item">
                <img src={users.avatar_url} alt={users.login}/>
                <p>{users.name}</p>
                <p>{users.location}</p>
            </div>
        </div>
    )
}

export default UseEffectMultipleReturns;
