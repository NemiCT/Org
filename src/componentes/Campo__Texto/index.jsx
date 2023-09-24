import "./Campo__Texto.css";

const Campo__Texto = (props) => {
  const placeholderModif = `${props.placeholder}...`;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="campo--texto">
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModif}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default Campo__Texto;
