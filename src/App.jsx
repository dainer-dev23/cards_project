// import Saludo from "./components/Saludo.jsx"

// function App() {
//   return (<>
//     <div>App</div>
//     <Saludo nombre = "Dember" ciudad="barranquilla" edad="12"/>
//     <Saludo nombre = "Pepo"/>
//     <Saludo nombre = "Angel"/>
//     </>
//   )
// }

// export default App

// function App() {
//   return (
//     <>

//       <Cards
//         name="Joel"
//         profesion="Developer"
//         imagen={programador}
//       />
//       <Cards
//         name="Ana"
//         profesion="Diseñadora"
//         imagen={diseñadora}
//       />
//     </>
//   );
// }

// export default App;

import diseñadora from "./assets/diseñadora.jpg";
import programador from "./assets/programador.jpg";

import React, { Profiler } from "react";
import Cards from "./components/Cards.jsx";
import "./Cards.css";

function App() {
  const personajes = [
    {
      nombre: "Ana",
      descripcion: "Diseñadora",
      imagen: diseñadora,
    },

    {
      nombre: "Joel",
      descripcion: "Developer",
      imagen: programador,
    },
  ];

  

  return (
    <>
      <div>App</div>
      {personajes.map((personaje) => {
        return (
          <>
            <Cards
              name={personaje.nombre}
              profesion={personaje.descripcion}
              imagen={personaje.imagen}
              
            ></Cards>

          </>
        );
      })}
    </>
  );
}

export default App;
