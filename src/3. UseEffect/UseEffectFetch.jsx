import React, { useEffect, useState } from 'react';
import './UseEffect.css';

const url = 'https://api.github.com/users';

// second argument

function UseEffectFetch() {
    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
        console.log(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="container">
            <h2 className="center-text">Github Users</h2>
            {
                users.map((user) => {
                    const {avatar_url, id, login, type} = user;
                    return (
                        <div key={id} className="item">
                            <img src={avatar_url} alt={login}/>
                            <h3>{login}</h3>
                            <small>{type}</small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseEffectFetch
