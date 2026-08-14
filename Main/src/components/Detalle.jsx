import "../App.css";
import { obtenerColor } from "../utils/categoria";

export default function Detalle({ elemento }) {
  return (
    <article
      className="detalle"
      
    >
      <h2>{elemento.nombre}</h2>

      <p><strong>Símbolo:</strong> {elemento.simbolo}</p>
      <p><strong>Número atómico:</strong> {elemento.numero}</p>
      <p><strong>Categoría:</strong> {elemento.categoria}</p>
      <p><strong>Masa atómica:</strong> {elemento.masa}</p>
      <p><strong>Estado:</strong> {elemento.estado}</p>
      <p><strong>Grupo:</strong> {elemento.grupo}</p>
      <p><strong>Período:</strong> {elemento.periodo}</p>
      <p><strong>Configuración electrónica:</strong> {elemento.configuracion}</p>
      <p><strong>Electronegatividad:</strong> {elemento.electronegatividad}</p>
      <p><strong>Punto de fusión:</strong> {elemento.fusion} °C</p>
      <p><strong>Punto de ebullición:</strong> {elemento.ebullicion} °C</p>
      <p><strong>Densidad:</strong> {elemento.densidad} g/cm³</p>
      <p><strong>Año de descubrimiento:</strong> {elemento.descubrimiento}</p>
    </article>
  );
}