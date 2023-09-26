import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  // Destructuración
  const { titulo, colorPrimario, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor } = props;

  const estiloBackground = { backgroundColor: hexToRgba(colorPrimario, 0.5) };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={estiloBackground}>
          <input
            type="color"
            className="input--color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
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
