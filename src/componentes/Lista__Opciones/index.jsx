import "./Lista__Opciones.css";

const Lista__Opciones = (props) => {
  //Metodo map -> arreglo.map( (equipo, index) => {
  // return <option></option>
  //    })
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="lista--opciones">
      <label>{props.titulo}</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo...
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Lista__Opciones;
