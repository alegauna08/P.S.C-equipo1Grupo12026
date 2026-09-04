import React, { useState } from 'react';
import elementos from "./data/Elementos.js";
import Tabla from "./components/Tabla";
import Detalle from "./components/Detalle";
import "./App.css";

export default function App() {
  const [seleccionado, setSeleccionado] = 
  useState(null);
  function cerrar() {
    setSeleccionado(null)
	
}

  return (
    <>
      <h1>Tabla Periódica</h1>

      <Tabla
        elementos={elementos}
        seleccionar={setSeleccionado}
      />

      {seleccionado
      && 
      <Detalle
        elemento={seleccionado}
        cerrar={cerrar}/>}
    </>
  );
}
