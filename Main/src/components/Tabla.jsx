import Elementos from "./Elementos";
import "./Tabla.css";

export default function Tabla({ elementos, seleccionar }) {
  return (
  <>
 <div className="leyenda">
  <div><span className="color metal-alcalino"></span> Metal alcalino</div>
  <div><span className="color metal-alcalinoterreo"></span> Metal alcalinotérreo</div>
  <div><span className="color metal-transicion"></span> Metal de transición</div>
  <div><span className="color metal-post-transicion"></span> Metal post-transición</div>
  <div><span className="color metaloide"></span> Metaloide</div>
  <div><span className="color no-metal"></span> No metal</div>
  <div><span className="color halogeno"></span> Halógeno</div>
  <div><span className="color gas-noble"></span> Gas noble</div>
  <div><span className="color lantanido"></span> Lantánido</div>
  <div><span className="color actinido"></span> Actínido</div>
</div>
  <div className="tabla-periodica">
    {elementos.map((el) => (
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