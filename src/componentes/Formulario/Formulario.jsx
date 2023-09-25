import { useState } from "react";
import "./Formulario.css";
import Campo__Texto from "../Campo__Texto";
import Lista__Opciones from "../Lista__Opciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio");
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    console.log(datosEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo__Texto
          titulo="Nombre"
          placeholder="Ingrese nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo__Texto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo__Texto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <Lista__Opciones
          titulo="Equipo"
          valor={equipo}
          equipos={props.equipos}
          actualizarValor={actualizarEquipo}
        />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
