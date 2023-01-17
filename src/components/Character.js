import React from 'react';
import './Character.css';

export const Character = ({id, name, status, species, gender, image}) => {
    return (
        <div className='container'>
            <div>{id}</div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <img className="image" src={image} alt={name}/>
        </div>
    );
}