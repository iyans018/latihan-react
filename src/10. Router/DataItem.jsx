import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';

const DataItem = () => {
    const [people, setPeople] = useState(data);
    return (
        <div className="container">
            <h2>Data Page</h2>
            {people.map((person) => {
                return (
                    <div key={person.id} className="item">
                        <h3>{person.name}</h3>
                        <Link to={`/person/${person.id}`} className="btn-invicible">View</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default DataItem
