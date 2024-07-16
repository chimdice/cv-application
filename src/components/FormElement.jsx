import { useState } from "react"

export default function getFormElement ({type="", field="", initalValue = ""}) {

    const [elementValue, changeElementValue] = useState(initalValue);


    return ({
      elementValue,
      changeElementValue,
      render:(
      <div className="form-element" style={{"padding":"10px"}}>
        <label htmlFor={field}>{field}: </label>
        <div>
          <input type={type} id={field} value={elementValue} onInput={(e) => changeElementValue(e.target.value)}/>
        </div>
      </div>
      )
    })
  }