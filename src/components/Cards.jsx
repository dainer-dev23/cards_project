import React from "react";
import "../Cards.css";

function Cards({ name, profesion, imagen }) {
  function saludar(nombre) {
    alert("hola " + nombre);
  }
  return (
    <div className="card">
      <img src={imagen} alt="" className="cardImg" />

      <div className="cardInfo">
        <h2>{name}</h2>

        <p>{profesion}</p>

        <button onClick={()=>{saludar(name)}}> perfil </button>
      </div>
    </div>
  );
}

export default Cards;

//trajetas de perfiles usando componentes y props
//crear una interfaz con varias tarjetas
//cada tarjeta debe mostrar
//imagen
//nombre
//rol o profesion
//boton simple

//ejemplo
//joel - developer
//ana - diseñadora
