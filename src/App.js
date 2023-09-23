import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";

function App() {
  const [mostrarForm, actualizarMostrar] = useState(true);

  // Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra   <-- Forma corta

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  };

  return (
    <div>
      <Header />
      {/* {mostrarForm ? <Formulario /> : <></>} */}
      {mostrarForm && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
