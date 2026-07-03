export function obtenerColor(categoria) {
  switch (categoria) {
    case "No metal":
      return "#c47c29"; // celeste

    case "Gas noble":
      return "#3369fd"; // azul fuerte

    case "Metal alcalino":
      return "#755239"; // naranja

    case "Metal alcalinotérreo":
      return "#b39f53"; // amarillo

    case "Metal de transición":
      return "#5a695f"; // verde

    case "Lantánido":
    case "Lantanido":
      return "#8677aa"; // violeta

    case "Actínido":
    case "Actinido":
      return "#a855f7"; // violeta oscuro

    case "Metaloide":
      return "#10b981"; // verde agua

    case "Halógeno":
      return "#b46565"; // rojo

    case "Post-transición":
    case "Post-transicion":
      return "#94a3b8"; // gris

    default:
      return "#36423b"; // gris claro
  }
}