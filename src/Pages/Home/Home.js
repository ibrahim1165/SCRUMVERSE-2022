import React from 'react';
import Crouse from '../Crouse/Crouse';
import Services from '../Crouse/Services';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Crouse />
            <Services />
        </div>
    );
};

export default Home;