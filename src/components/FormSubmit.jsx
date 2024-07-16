import { useState } from "react";
import renderCV from "./renderCV";

const click = (section, normal, edit, total, addTotal) => {
    const formInfo = document.querySelector("."+section+"-submit")
    const formElements = formInfo.parentElement.childNodes;
    const info = {};
    for (let i = 0; i < formElements.length -1; i++) {
      info[formElements[i].lastChild.firstChild.id]=formElements[i].lastChild.firstChild.value;
    }

    addTotal(total+1)
    renderCV(section, info, edit, total);
    normal.forEach((element)=>{
      element("")
    })

    const form = document.querySelector(".form-"+section);
    const buttons = document.querySelector(".buttons");

    form.classList.toggle("hide");
    buttons.classList.toggle("hide");
}

export default function FormSubmit (props) {
    return (
      <>      
        <div className={props.section+"-submit"} style={{"padding":"10px"}}>
          <input type="submit" id={props.section} value="submit" onClick={(e) => {e.preventDefault(); click(props.section, props.normal, props.edit, props.total, props.addTotal)}}/>
        </div>
      </>

    )
  }