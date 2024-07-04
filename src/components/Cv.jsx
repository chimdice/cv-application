export default function CV (props) {
    return (
      <div className="cv">
        <h2>{props.field}: </h2>
        <p id={props.field}>{props.info}</p>
      </div>
    )
  }