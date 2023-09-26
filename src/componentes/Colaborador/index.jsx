import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = (props) => {
  const { nombre, puesto, foto, id } = props.datos;
  const { colorPrimario, eliminarColaborador } = props;

  const estiloBackground = { backgroundColor: colorPrimario };

  let altFoto = `Fotografía de ${nombre}`;
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        onClick={() => eliminarColaborador(id)}
        className="eliminar"
      />
      <div className="encabezado" style={estiloBackground}>
        <img src={foto} alt={altFoto} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
