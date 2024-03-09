import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="site-footer"
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          lineHeight: "20px",
          padding: "25px 0px 0px 0px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">Nuestra dirección</h3>
                <p>Aqui va un texto</p>
                <ul className="adress">
                  <li>
                    <i class="bi bi-geo-alt">Buenas</i>
                  </li>
                  <li>
                    <i class="bi bi-geo-alt">Buenas</i>
                  </li>
                  <li>
                    <i class="bi bi-geo-alt">Buenas</i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">Temas de la ultima reunion</h3>
                <p>Aqui va un texto</p>
                <ul className="bullet">
                  <li>
                    <a class="bi bi-geo-alt">Buenas</a>
                  </li>
                  <li>
                    <a class="bi bi-geo-alt">Buenas</a>
                  </li>
                  <li>
                    <a class="bi bi-geo-alt">Buenas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">Contact form</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Nombre"></input>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Email"></input>
                    </div>
                  </div>
                  <textarea name="" placeholder="Escribe tu mensaje"></textarea>
                  <div className="text-right">
                    <input type="submit" value="Enviar mensaje"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <p className="colophon">
            Copyright 2024 Iglesia Buenas Nuevas. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
