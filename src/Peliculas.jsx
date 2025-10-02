import { Link, Outlet } from "react-router-dom";

function Peliculas() {
  const peliculas = [
    {
      id: 1,
      titulo: "Matrix",
      director: "Lana y Lilly Wachowski",
      año: 1999,
      imagen:
        "https://m.media-amazon.com/images/M/MV5BNGE1YzI4NzMtZTUxNi00Y2I5LTg2MmQtODE0NThmYTFmMDk0XkEyXkFqcGc@._V1_.jpg",
      descripcion:
        "Un hacker descubre la verdad detrás de la realidad simulada en la que vive y lidera la rebelión contra las máquinas.",
    },
    {
      id: 2,
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      director: "Peter Jackson",
      año: 2001,
      imagen:
        "https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg",
      descripcion:
        "Un hobbit hereda un anillo poderoso y emprende una peligrosa misión para destruirlo antes de que caiga en manos del enemigo.",
    },
    {
      id: 3,
      titulo: "Inception",
      director: "Christopher Nolan",
      año: 2010,
      imagen:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      descripcion:
        "Un ladrón especializado en infiltrarse en los sueños debe cumplir una misión imposible: implantar una idea en la mente de alguien.",
    },
    {
      id: 4,
      titulo: "Pulp Fiction",
      director: "Quentin Tarantino",
      año: 1994,
      imagen:
        "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
      descripcion:
        "Historias entrelazadas de criminales, boxeadores y gánsteres en Los Ángeles, narradas con un estilo único y no lineal.",
    },
    {
      id: 5,
      titulo: "Interstellar",
      director: "Christopher Nolan",
      año: 2014,
      imagen:
        "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      descripcion:
        "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    },
    {
      id: 6,
      titulo: "Dead Poets Society",
      director: "Peter Weir",
      año: 1989,
      imagen:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11671_p_v8_ad.jpg",
      descripcion:
        "Un maestro en un colegio privado emplea métodos poco convencionales para inspirar las vidas de sus estudiantes.",
      pd:  `pd: muy linda m gustó mucho, medio trágica ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
      ㅤㅤㅤㅤㅤ carpe diem `,
    },
    {
      id: 7,
      titulo: "Nueve Reinas",
      director: "Fabián Bielinsky",
      año: 2000,
      imagen:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/WAIMDDPU2ZDL7FB62INBQA6PZY.jpg",
      descripcion:
        "Juan y Marcos son dos estafadores que casualmente se ven involucrados en un asunto que los puede convertir en millonarios: tienen menos de un día para llevar a cabo un engaño que no puede fallar.",
      pd: "pd: terrible plot twist m pegué un re viaje",
    },
    {
      id: 8,
      titulo: "Flow",
      director: "Gints Zilbalodis",
      año: 2024,
      imagen:
        "https://m.media-amazon.com/images/M/MV5BOTM5ODBlOTAtYjcwZi00YzkzLWIzODEtMTM2MTZlNDFmMWU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      descripcion:
        "El gato es un animal solitario, pero cuando su hogar es devastado por una gran inundación, encuentra refugio en un barco habitado por varias especies y tendrá que trabajar en equipo con ellas, a pesar de sus diferencias.",
      pd: "pd: me hace acordar a mi gata",
    },
    {
      id: 9,
      titulo: "La Momia",
      director: "Stephen Sommers",
      año: 1999,
      imagen: "https://images.justwatch.com/poster/304854046/s718/la-momia.jpg",
      descripcion:
        "Rick O'Connell y un compañero descubren las ruinas de Hamunaptra, donde, luego, un grupo de jóvenes provocan la resurrección de la momia de un diabólico sacerdote egipcio.",
      },
    {
      id: 10,
      titulo: "Lo que el viento se llevó",
      director: "Victor Fleming",
      año: 1940,
      imagen:
        "https://m.media-amazon.com/images/M/MV5BY2E3YjBkNmQtZWUzYS00NGZmLTkxYjUtY2Q3MDZiNTY4YWU3XkEyXkFqcGc@._V1_.jpg",
      descripcion:
        "Este drama épico de la Guerra Civil se centra en la vida de la petulante belleza sureña Scarlett O'Hara. Desde la idílica hospitalidad de su gran plantación, la película narra su supervivencia a través de la historia trágica del Sur durante la Guerra Civil y la Reconstrucción, y sus enredados amorosos con Ashley Wilkes y Rhett Butler.",
      pd: "pd: le gusta a mi mamá",
    },
  ];

  return (
    <>
      <h1 className="nombre-pagina">Crónicas de la Pantalla Grande</h1>
      <Outlet context={peliculas} />;
    </> 
  )
}
export default Peliculas;