import "./Button.css";

function Button(props) {
  return (
    <>
      <button type={props.tytpe} className={props.clase}>
          {props.texto}
      </button>
    </>
  );
}

export default Button;