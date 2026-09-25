import { useState } from "react";
import Elementos from "./Elementos";
import "./Tabla.css";

export default function Tabla({ elementos, seleccionar }) {
  const [filtro, setFiltro] = useState(null);

  const elementosFiltrados = filtro
    ? elementos.filter((el) => el.categoria === filtro)
    : elementos;

  return (
    <>
      <div className="leyenda">

        <div onClick={() => setFiltro("Metal alcalino")}>
          <span className="color metal-alcalino"></span>
          Metal alcalino
        </div>

        <div onClick={() => setFiltro("Metal alcalinotérreo")}>
          <span className="color metal-alcalinoterreo"></span>
          Metal alcalinotérreo
        </div>

        <div onClick={() => setFiltro("Metal de transición")}>
          <span className="color metal-transicion"></span>
          Metal de transición
        </div>

        <div onClick={() => setFiltro("Post-transición")}>
          <span className="color metal-post-transicion"></span>
          Metal post-transición
        </div>

        <div onClick={() => setFiltro("Metaloide")}>
          <span className="color metaloide"></span>
          Metaloide
        </div>

        <div onClick={() => setFiltro("No metal")}>
          <span className="color no-metal"></span>
          No metal
        </div>

        <div onClick={() => setFiltro("Halógeno")}>
          <span className="color halogeno"></span>
          Halógeno
        </div>

        <div onClick={() => setFiltro("Gas noble")}>
          <span className="color gas-noble"></span>
          Gas noble
        </div>

        <div onClick={() => setFiltro("Lantánido")}>
          <span className="color lantanido"></span>
          Lantánido
        </div>

        <div onClick={() => setFiltro("Actínido")}>
          <span className="color actinido"></span>
          Actínido
        </div>

        <button onClick={() => setFiltro(null)}>
          Mostrar todos
        </button>

      </div>

      <div className="tabla-periodica">
        {elementosFiltrados.map((el) => (
          <Elementos
            key={el.numero}
            elemento={el}
            seleccionar={seleccionar}
          />
        ))}
      </div>
    </>
  );
}