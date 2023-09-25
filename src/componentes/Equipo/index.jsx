import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  // Destructuración
  const { colorSecundario, titulo, colorPrimario } = props.datos;

  const estiloBackground = { backgroundColor: colorSecundario };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <section className="equipo" style={estiloBackground}>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores">
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  );
};

export default Equipo;
