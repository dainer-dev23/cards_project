import  React from 'react'

function Saludo({nombres, ciudad, edad} ) {
  return (<>
    <h1>Hola {nombres}</h1>
    <h1>vives en {ciudad}</h1>
    <h1>tienes {edad}</h1>
   </>
  )
}

export default Saludo
