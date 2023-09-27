import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
  const { nombre, puesto, foto, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;

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
        {/* condicion ? verdadero : falso */}
        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
