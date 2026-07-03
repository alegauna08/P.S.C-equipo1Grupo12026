import { useState } from "react";
import elementos from "./data/elementos";
import Tabla from "./components/Tabla";
import Detalle from "./components/Detalle";
import "./App.css"


export default function App() {
  const [seleccionado, setSeleccionado] = useState(elementos[0]);

  return (
    <>
      <h1> Tabla Periódica</h1>

      <Tabla
        elementos={elementos}
        seleccionar={setSeleccionado}
      />

      <Detalle elemento={seleccionado} />
    </>
  );
}