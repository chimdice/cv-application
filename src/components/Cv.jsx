export default function CV (props) {
    return (
      <div className={"cv-"+props.field}>
        <h2>{props.field}</h2>
      </div>
    )
  }