import "./Colaborador.css";

const Colaborador = (props) => {
  const { nombre, puesto, foto } = props.datos;
  const { colorPrimario } = props;

  const estiloBackground = { backgroundColor: colorPrimario };

  let altFoto = `Fotografía de ${nombre}`;
  return (
    <div className="colaborador">
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
