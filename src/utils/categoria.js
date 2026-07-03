export function obtenerColor(categoria) {
  switch (categoria) {
    case "No metal":
      return "#c28e53";
      
    case "Gas noble":
      return "#3369fd"; 

    case "Metal alcalino":
      return "#755239"; 

    case "Metal alcalinotérreo":
      return "#b39f53"; 

    case "Metal de transición":
      return "#5a695f"; 

    case "Lantánido":
    case "Lantanido":
      return "#8677aa"; 

    case "Actínido":
    case "Actinido":
      return "#a855f7"; 

    case "Metaloide":
      return "#10b981"; 

    case "Halógeno":
      return "#b46565";

    case "Post-transición":
    case "Post-transicion":
      return "#94a3b8";

    default:
      return "#b881a1";
  }
}