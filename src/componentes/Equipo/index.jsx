import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  // Destructuración
  const { colorSecundario, titulo, colorPrimario } = props.datos;
  const { colaboradores, eliminarColaborador } = props;

  const estiloBackground = { backgroundColor: colorSecundario };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={estiloBackground}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                key={index}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
