import React from "react";
import slide1 from "./../../images/slide-1.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const [proximoseventos,setproximoseventos] = useState([]);
  const [libros,setlibros] = useState([]);
  const [mensajes, setmensajes] = useState([])
  
  useEffect(()=>{
    fetch('/proximoseventos.json')
    .then ((Response) => Response.json())
    .then ((data)=> setproximoseventos(data))
    .catch ((error)=> console.error('Se ha encontrado el siguiente error: ',error));
  },[])

  useEffect(()=>{
    fetch('/libros.json')
    .then ((Response) => Response.json())
    .then ((data)=> setlibros(data))
    .catch ((error)=> console.error('Se ha encontrado el siguiente error: ',error));
  },[])

  useEffect(()=>{
    fetch('/ultimosmensaje.json')
    .then ((Response) => Response.json())
    .then ((data)=> setmensajes(data))
    .catch ((error)=> console.error('Se ha encontrado el siguiente error: ',error));
  },[])

  return (
    <div>
      <div className="hero" style={{ paddingBottom: "100px" }}>
        <div className="slides">
          <div
            className="container"
            style={{ width: "100%", padding: "10px 0px 10px 0px" }}
          >
            <div
              className="image-container"
              style={{ position: "relative", textAlign: "center" }}
            >
              <img src={slide1} width={"100%"} alt="Slide 1" />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <small className="slide-subtitle" style={{ color: "white" }}>
                  Iglesia Buenas Nuevas Bellas Colinas
                </small>
                <h2 className="slide-title" style={{ color: "white" }}>
                  Donde reside Dios
                </h2>
                <a href="#" className="button">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="main-content">
        <div className="fullwidth-block">
          <div className="container">
            <h2 className="section-title">Libros</h2>
            <div className="row" style={{display: "flex",}}>
              { libros.map((libros,index)=>(
                <li key={index}>
                  <a href="#">
                  <h3 className="books-title">{libros.title}</h3>
                  <img src={libros.imageUrl} style={{width: "150px", height: "200", borderRadius:"10px", margin:"10px"}}/>
                  
                  <span className="libros-meta">
                  <span>
                    
                    <div style={{margin:"auto"}}>{libros.date}</div>
                  </span>
                  </span>
                  </a>
                </li>
              ))}
            </div>
            <div className="row">
              <div className="col-md-6">
                <h2 className="section-title">Proximos Eventos</h2>
                <ul className="event-list">
                { proximoseventos.map((eventos,index)=>(
                  <li key={index}>
                    <a href="#">
                      <h3 className="event-title">{eventos.title}</h3>
                      <span className="event-meta">
                        <span>
                          <i
                            className="bi bi-calendar"
                            style={{ marginRight: "2%" }}
                          ></i>
                          {eventos.date}
                        </span>
                        <span>
                          <i className="bi bi-geo-alt" style={{marginRight: '1%'}}></i>
                          {eventos.location}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                </ul>
              </div>
              <div className="col-md-6" style={{display:"auto"}}>
                <h2 className="section-title">Ultimos mensajes</h2>
                <ul className="seremon-list">
                {mensajes.map((mensajes,index)=>(
                  <li key={index}>
                    <img src={mensajes.imageUrl} style={{width: "150px", height: "200px", borderRadius:"10px", margin:"10px"}} />
                    <div className="seremon-detail">
                      <h3 className="seremon-title">
                        <a href="#">
                          {mensajes.title}
                        </a>
                      </h3>
                      <div className="seremon-meta">
                        <div className="pastor">
                          <i className="bi bi-person-fill" style={{marginRight: "1%"}}></i>
                          {mensajes.predicador}
                        </div>
                        <div className="date">
                          <i
                            className="bi bi-calendar"
                            style={{ marginRight: "1%" }}
                          ></i>
                          {mensajes.date}
                        </div>
                      </div>
                    </div>
                  </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a className="button">Ver todos los mensajes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
