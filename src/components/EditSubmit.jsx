import { useState } from "react";

const click = (section) => {
  const formInfo = document.querySelector("."+section+"-edit")
  const numberID = formInfo.classList[1]
  const formElements = formInfo.lastChild.childNodes;

  const elementName = "."+section + "." + numberID
  const cvElement = document.querySelector(elementName)

  for (let i = 0; i < formElements.length -1; i++) {
    const elementValue =formElements[i].lastChild.firstChild.value;
    const elementKey = formElements[i].firstChild.textContent;
    cvElement.childNodes[i].textContent = elementKey + elementValue;
  }
    
  formInfo.classList.remove(numberID)

  const buttons = document.querySelector(".buttons");

  formInfo.classList.toggle("hide");
  buttons.classList.toggle("hide");
}

export default function FormEdit (props) {
    return (
      <>      
        <div className={props.section+"-edit"} style={{"padding":"10px"}}>
          <input type="submit" id={props.section} value="edit" onClick={(e) => {e.preventDefault(); click(props.section)}}/>
        </div>
      </>

    )
  }