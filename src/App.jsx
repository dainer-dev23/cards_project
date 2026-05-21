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

import diseñadora from "./assets/diseñadora.jpg"
import programador from "./assets/programador.jpg"

import React from "react";
import Cards from "./components/Cards.jsx";

function App() {
  return (
    <>

      <Cards
        name="Joel"
        profesion="Developer"
        imagen={programador}
      />
      <Cards
        name="Ana"
        profesion="Diseñadora"
        imagen={diseñadora}
      />
    </>
  );
}

export default App;