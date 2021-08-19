import React from 'react';
import './hero.scss';

const Hero = () => {
    return (
        <div>
            <div className="hero-wrapper">
                <img className="hero-image" style={{width: "100%"}} src="./hero-images.png" alt="hero" />
                <div className="hero-text">
                    <h1 className="hero-title">Discover Amazing places in <br /> Japan</h1>
                    <p>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.</p>
                </div>
            </div>

            <div className="benefit-wrapper">
                <h3 className="benefit-title">Benefit of Odigo</h3>
                <div className="benefit-grid">
                    <div className="benefit-content">
                        <img src="./benefit-icon-01.png" alt="benefit1" />
                        <p className="benefit-text">Welcome to Odigo</p>
                        <p>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over</p>
                    </div>
                    <div className="benefit-content">
                        <img src="./benefit-icon-02.png" alt="benefit1" />
                        <p className="benefit-text">Welcome to Odigo</p>
                        <p>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over</p>
                    </div>
                    <div className="benefit-content">
                        <img src="./benefit-icon-03.png" alt="benefit1" />
                        <p className="benefit-text">Welcome to Odigo</p>
                        <p>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
