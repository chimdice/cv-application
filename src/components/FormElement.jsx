export default function FormElement (props) {

    return (
      <div className="form-element" style={{"padding":"10px"}}>
        <label htmlFor={props.field}>{props.field}: </label>
        <div>
          <input type={props.type} id={props.field} value={props.value} onInput={(e) => props.onType(e.target.value)}/>
        </div>
      </div>
    )
  }