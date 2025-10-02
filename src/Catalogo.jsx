import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import "./All.css";

function All() {
  const peliculas = useOutletContext();
  return (
    <> 
    <h1 className="titulo">Disfrutá de nuestro catálogo</h1>
    <div className="all-container">
      {peliculas.map((pelicula) => (
        <Link key={pelicula.id} to={"/peliculas/" + pelicula.id} className="all-link">
          <div className="all-card">
            <img src={pelicula.imagen} alt={pelicula.titulo} className="all-poster" />
            <h2 className="all-titulo">{pelicula.titulo}</h2>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}

export default All;
