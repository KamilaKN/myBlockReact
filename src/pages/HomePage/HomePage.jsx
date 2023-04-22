import React from 'react';
import Intro from '../../components/Intro/Intro';
import About from "../../components/About/About"
import Subscribe from "../../components/Subscribe/Subscribe"

const HomePage = () => {
    return (
        <>
           <Intro/>
           <About/>
           <Subscribe/>
        </>
    );
};

export default HomePage;