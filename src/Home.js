import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>CS Central</h1>
            <nav>
                <ul>
                    <li><Link to="/pathway/programming">Programming</Link></li>
                    <li><Link to="/pathway/web-development">Web Development</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;