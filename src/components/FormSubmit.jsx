import { useState } from "react";
import renderCV from "./renderCV";

const click = (section, allSubmits, addSubmits, updaters, editor, on) => {
    const formInfo = document.querySelector("."+section+"-submit")
    const formElements = formInfo.parentElement.childNodes;
    console.log(formInfo)
    const info = {};
    for (let i = 0; i < formElements.length -1; i++) {
      info[formElements[i].lastChild.firstChild.id]=formElements[i].lastChild.firstChild.value;
    }
    allSubmits.push(info);
    addSubmits(allSubmits);
    console.log(allSubmits);
    renderCV(section, info, allSubmits.length-1, editor, on);

    updaters.forEach((updater) => {
      updater("")
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
          <input type="submit" id={props.section} value="submit" onClick={(e) => {e.preventDefault(); click(props.section, props.allSubmits, props.addSubmits, props.updaters, props.edit, props.renderEdit)}}/>
        </div>
      </>

    )
  }