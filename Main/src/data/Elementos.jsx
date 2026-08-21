import elementos from "../data/elementos";
import { obtenerColor } from "../utils/categoria";
import "../App.css"

export default function Elementos({ elemento, seleccionar }) {
  return (
    <article
      className="elemento-celda"
      onClick={() => seleccionar(elemento)}
      style={{ 
      gridColumn: elemento.grupo,
      gridRow : elemento.periodo,
      backgroundColor: obtenerColor(elemento.categoria) }}
    >
      <span className="numero">{elemento.numero}</span>
      <span className="simbolo">{elemento.simbolo}</span>
      <span className="nombre">{elemento.nombre}</span>
    </article>
  );
}
