import React from "react";
import slide1 from "./../../images/slide-1.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero" style={{ paddingBottom: '100px' }}>
        <div className="slides">
          <div className="container" style={{ width: '100%', padding: '10px 0px 10px 0px' }}>
            <div className="image-container" style={{ position: 'relative', textAlign: 'center' }}>
              <img src={slide1} width={'100%'} alt="Slide 1" />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px' }}>
                <small className="slide-subtitle" style={{ color:'white' }}>Iglesia Buenas Nuevas Bellas Colinas</small>
                <h2 className="slide-title" style={{ color:'white' }}>Donde reside Dios</h2>
                <a href="#" className="button">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
