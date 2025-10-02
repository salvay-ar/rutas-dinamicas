import { useOutletContext, useParams } from "react-router-dom";

function Detalles() {
  const { id } = useParams();
  const peliculas = useOutletContext();
  const pelicula = peliculas.filter((pelicula) => pelicula.id === parseInt(id))[0]; 
  
  //se parsea el id porque useParams() devuelve un string, se indexea al primer elemento 
  // porque .filter devuelve un array :)
  return (
    <>
 <div className="detalle-container">
      <div className="detalle-card">
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          className="detalle-poster"
        />
        <div className="detalle-info">
          <h1 className="detalle-titulo">{pelicula.titulo}</h1>
          <p className="detalle-director">
            Director: {pelicula.director}
          </p>
          <p className="detalle-ano">
            Año: {pelicula.año}
          </p>
          <p className="detalle-descripcion">{pelicula.descripcion}</p>
          <p className="acotaciones"> {pelicula.pd}</p>
        </div>
      </div>
    </div>

    </>
  );
}
export default Detalles;
