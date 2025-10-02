import { Link } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicio-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="titulo">Crónicas de la Pantalla Grande</h1>
        <p className="subtitulo">Explora un mundo lleno de historias y emociones</p>
        <Link to="/peliculas/all" className="btn-comenzar">
          Comenzar
        </Link>
      </div>
    </div>
  );
}

export default Inicio;