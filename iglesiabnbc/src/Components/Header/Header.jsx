import React from "react";
import './../../App.css';
import logo from './../../images/logo.jpg'

const Header = () => {
  return (
    <div>
      <div className="header" style= {{textAlign: 'center'}}>
        <div className="container">
          <a className="branding">
            <img src={logo} width='100px' alt="" className="Logo"></img>
            <h1 className="site-title">Iglesia Buenas Nuevas Bellas Colinas</h1>
          </a>

          <div className="main-navigation">
            <button className="menu-toggle">
              <i className=""></i>Menu
            </button>
            <ul class="menu">
              <li class="menu-item current-menu-item">
                <a href="index.html">
                  Inicio
                </a>
              </li>
              <li class="menu-item">
                <a href="#">
                  Pastores 
                </a>
              </li>
              <li class="menu-item">
                <a href="seremons.html">
                  Ceremonias
                </a>
              </li>
              <li class="menu-item">
                <a href="events.html">
                  Eventos
                </a>
              </li>
              <li class="menu-item">
                <a href="families.html">
                  Familias
                </a>
              </li>
              <li class="menu-item">
                <a href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-navigation"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
