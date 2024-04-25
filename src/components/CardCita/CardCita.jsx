import "./CardCita.css";
import Button from "../Button/Button";

function CardCita(props) {
  return (
    <div className="cita">
        <p>Mascota: <span>{props.Mascota}</span></p>
        <p>Dueño: <span>{props.Dueño}</span></p>
        <p>Fecha: <span>{props.Fecha}</span></p>
        <p>Hora: <span>{props.Hora}</span></p>
        <p>Sintomas: <span>{props.Sintomas}</span></p>
        <Button 
          clase = "button eliminar u-full-width"
          texto = "Eliminar ×"
        />
    </div>
  );
}

export default CardCita;