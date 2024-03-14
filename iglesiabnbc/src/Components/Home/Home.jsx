import React from "react";
import slide1 from "./../../images/slide-1.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="slides">
          <div className="container">
          <div>
          <img src={slide1} alt="Slide 1" /> {/* Use the imported image */}
            <small className="slide-subtitle">Iglesia Buenas Nuevas Bellas Colinas</small>
            <h2 className="slide-title">Donde reside Dios</h2>
            <a href="#" className="button">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
