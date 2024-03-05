import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
      <div className='hero-container'>
        <video src='/videos/Books.mp4' autoPlay loop muted />
        <h1>ReadingCircle</h1>
        <p>Build your virtual book club, wherever you are.</p>
        <div className='hero-btns'>
         
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            GET STARTED 
          </Button>
        </div>
      </div>
    );
  }
export default HeroSection
