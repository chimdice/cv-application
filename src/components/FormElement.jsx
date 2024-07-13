import { useState } from "react"

export default function getFormElement ({type="", field="", initalValue = "", show=false}) {

    const [elementValue, changeElementValue] = useState(initalValue);

    if (show) {
      console.log(elementValue)
    }

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