export default function CV (props) {
    return (
      <div className="cv">
        <h2>{props.field}: </h2>
        <p>{props.info}</p>
      </div>
    )
  }