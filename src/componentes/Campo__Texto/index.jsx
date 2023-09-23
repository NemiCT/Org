import "./Campo__Texto.css";

const Campo__Texto = (props) => {
  const placeholderModif = `${props.placeholder}...`;
  return (
    <div className="campo--texto">
      <label>{props.titulo}</label>
      <input placeholder={placeholderModif} required={props.required} />
    </div>
  );
};

export default Campo__Texto;
