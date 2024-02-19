import React from 'react';
import { useParams } from 'react-router-dom';

const Pathway = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>{id.charAt(0).toUpperCase() + id.slice(1)}</h2>
        </div>
    );
};

export default Pathway;