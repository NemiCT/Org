import "./Formulario.css";
import Campo__Texto from "../Campo__Texto";
import Lista__Opciones from "../Lista__Opciones";
import Boton from "../Boton";

const Formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio", e);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo__Texto titulo="Nombre" placeholder="Ingrese nombre" required />
        <Campo__Texto titulo="Puesto" placeholder="Ingresar puesto" required />
        <Campo__Texto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
        />
        <Lista__Opciones titulo="Equipo" />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
