import { useState } from "react";

const click = (section, allSubmits, addSubmits, updaters) => {
    const formInfo = document.querySelector("."+section+"-edit")
    const formElements = formInfo.parentElement.childNodes;
    console.log(formInfo)
    const info = {};
    for (let i = 0; i < formElements.length -1; i++) {
      info[formElements[i].lastChild.firstChild.id]=formElements[i].lastChild.firstChild.value;
    }
    allSubmits.push(info);
    addSubmits(allSubmits);
    renderCV(section, info, allSubmits.length-1);

    updaters.forEach((updater) => {
      updater("")
    })

    const form = document.querySelector(".form-"+section);
    const buttons = document.querySelector(".buttons");

    form.classList.toggle("hide");
    buttons.classList.toggle("hide");
}

export default function FormEdit (props) {
    return (
      <>      
        <div className={props.section+"-edit"} style={{"padding":"10px"}}>
          <input type="submit" id={props.section} value="edit" onClick={(e) => {e.preventDefault(); click(props.section, props.allSubmits, props.addSubmits, props.updaters)}}/>
        </div>
      </>

    )
  }