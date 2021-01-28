import React from 'react';
import { data } from './data';
import { useParams } from 'react-router-dom';

const Person = () => {
    const {slug} = useParams();
    const newPerson = data.find((person) => person.id === parseInt(slug))
    const { id, name } = newPerson;
    return (
        <div key={id} className="container">
            <h2>{name}</h2>
        </div>
    )
}

export default Person
