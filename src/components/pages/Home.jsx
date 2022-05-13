import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Herosection from '../HeroSection';
import Cards from './Cards';

function Home() {
    return (
        <>
            <Herosection />
            <Cards />
            <Footer />
        </>
    )
}
export default Home;