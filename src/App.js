import "./App.css";
import ListadoCitas from "./components/ListadoCitas/ListadoCitas";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Form />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <ListadoCitas />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
