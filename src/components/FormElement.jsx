export default function FormElement (props) {

    return (
      <div className="form-element" style={{"padding":"10px"}}>
        <label htmlFor={props.field}>{props.field}: </label>
        <div>
          <input type={props.type} id={props.field} value={props.value} onChange={(e) => props.onType(e.target.value)}/>
          <button onClick={(e) => {
            e.preventDefault();
            const input = document.querySelector("#"+props.field);
            props.onClick(input.value)
            }}>Update field</button>
        </div>
      </div>
    )
  }