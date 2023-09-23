import "./Formulario.css";
import Campo__Texto from "../Campo__Texto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo__Texto titulo="Nombre" placeholder="Ingrese nombre" />
        <Campo__Texto titulo="Puesto" placeholder="Ingresar puesto" />
        <Campo__Texto titulo="Foto" placeholder="Ingresar enlace de foto" />
      </form>
    </section>
  );
};

export default Formulario;
