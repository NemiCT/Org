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
  return (
    <div className="lista--opciones">
      <label>{props.titulo}</label>
      <select>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default Lista__Opciones;
