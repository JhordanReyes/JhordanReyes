import React, { useState } from 'react';
import "./style.css";

const Nav = () => {

  const [ menu, setMenu] = useState(false)

  const handleMenu = () => {
    const navMenu = document.getElementById("menu");
    menu ? setMenu(false) : setMenu(true);
    menu ? navMenu.style.left = "100%" : navMenu.style.left = "11%";
  }
  
  return (
    <>
      <div className='nav'>
          <h2>JR</h2>
          <ul>
            <li>
              <a 
                href="https://github.com/JhordanReyes"
                target="_blank">
                <i className='bx bxl-github'></i>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/jhordanreyes/"
                target="_blank">
                <i className='bx bxl-linkedin-square'></i>
              </a>
            </li>
            <li>
              <i 
                className='bx bx-menu' 
                onClick={ handleMenu }
              />
            </li>
          </ul>
      </div>

      <div className='menu' id='menu'>
        <i className='bx bx-x' onClick={ handleMenu }></i>
        <ul>
          <li><a onClick={ handleMenu } href="#inicio">Inicio</a></li>
          <li><a onClick={ handleMenu } href="">Proyectos</a></li>
          <li><a onClick={ handleMenu } href="#redes">Redes</a></li>
        </ul>
      </div>
    </>

  )
}

export default Nav