import React from 'react';
import './style.css';
import Tilt from 'react-tilt';
import img1 from "../../assets/camara-video.png";
import imgJhordan from "../../assets/jhordan.jpeg";

const Header = () => {
    return (
        <div className='header' id='inicio'>
            <div className='header__content'>
            <div className='header__text'>
                <h2>Jhordan Reyes</h2>
                <p>Desarrollador Front-end React</p>
                {/* <p>Si puedes pensarlo, puedes programarlo</p> */}
            </div>

            <div className='header__container-button'>
                <a href="#redes" className='header__a'>
                    <div className='header__button'>
                        <p>Get started</p>
                        <i className='bx bx-down-arrow-alt'></i>
                        </div>
                </a>
                <a href="#">
                    <div className='header__button download'>
                        <p>Download CV</p>
                        <i className='bx bx-download'></i>
                    </div>
                </a>
            </div>
            </div>
            <Tilt className='header__card' options={{ scale: 1}} >
                <img src={ imgJhordan } alt="Jhordan Reyes" />
            </Tilt>   
            <div className='bola bola-3'></div>
            <div className='bola bola-4'></div>
        </div>
    )
}

export default Header