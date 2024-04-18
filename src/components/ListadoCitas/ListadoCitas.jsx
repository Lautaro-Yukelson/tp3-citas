import "./ListadoCitas.css";
import CardCita from "../CardCita/CardCita.jsx"

function ListadoCitas() {
  return (
    <>
    <CardCita
        Mascota="Nina"
        Dueño="Martin"
        Fecha="2021-08-05"
        Hora="08:20"
        Sintomas="Le duele la pierna"
    />
    <CardCita
        Mascota="Sifon"
        Dueño="Flecha"
        Fecha="2023-08-05"
        Hora="09:24"
        Sintomas="Duerme mucho"
    />
    <CardCita
        Mascota="Floki"
        Dueño="Ari"
        Fecha="2023-08-05"
        Hora="16:15"
        Sintomas="No está comiendo"
    />
    </>
  );
}

export default ListadoCitas;