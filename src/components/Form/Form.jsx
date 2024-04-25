import "./Form.css";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

function Form(props) {
  return (
    <>
        <form>
            <FormInput 
            label = "Nombre Mascota"
            type="text"
            name="mascota"
            placeholder="Nombre Mascota"
            />
            <FormInput 
            label = "Nombre Dueño"
            type="text"
            name="propietario"
            placeholder="Nombre dueño de la mascota"
            />
            <FormInput 
            label = "Fecha"
            type="date"
            name="fecha"
            />
            <FormInput 
            label = "hora"
            type="time"
            name="hora"
            />
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width"></textarea>
            <Button 
            clase = "u-full-width button-primary"
            texto = "Agregar Cita"
            type = "submit"
            />
        </form>
    </>
  );
}

export default Form;