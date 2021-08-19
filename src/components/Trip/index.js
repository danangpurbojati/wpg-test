import React from 'react'
import './trip.scss'

const Trip = () => {
    return (
        <div className="trip-wrapper">
            <h3 className="trip-title">Get inspired for your next trip</h3>
            <hr className="trip-line" /> 
            <div className="trip-content">
                <div className="main-trip">
                    <div className="trip">
                        <img className="trip-image" src="./hero-images.png" alt="trip" />
                        <p className="trip-title">sapporo</p>
                    </div>
                    <div className="trip">
                        <img className="trip-image" src="./hero-images.png" alt="trip" />
                        <p className="trip-title">sapporo</p>
                    </div>
                </div>
                <div className="secondary-trip">
                    <div className="trip">
                        <img className="trip-image" src="./hero-images.png" alt="trip" />
                        <p className="trip-title">sapporo</p>
                    </div>
                    <div className="trip">
                        <img className="trip-image" src="./hero-images.png" alt="trip" />
                        <p className="trip-title">sapporo</p>
                    </div>
                    <div className="trip">
                        <img className="trip-image" src="./hero-images.png" alt="trip" />
                        <p className="trip-title">sapporo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trip
