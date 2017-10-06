import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>  (
        <div>
            <h2>Welcome to Home component !</h2>
            <h3>Featured list: </h3>
            <Link to='teachers/Dota/Zauguidou-Queleu'>Zauguidou Queleu</Link>
        </div>
    )

export default Home;