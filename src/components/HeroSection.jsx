import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
const Herosection = () => {
    return (
        <div className='hero-container'>
            <video src={require('../assets/videos/video-2.mp4')} autoPlay muted loop />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    );
}

export default Herosection;
