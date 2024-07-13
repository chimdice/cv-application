import { useState } from "react";

const click = (section, updaters) => {
    const formInfo = document.querySelector("."+section+"-edit")
    const numberID = formInfo.classList[1]
    const formElements = formInfo.parentElement.childNodes;
    console.log(numberID)

    const elementName = "."+section + "." + numberID
    const cvElement = document.querySelector(elementName)
    console.log(cvElement)
    // for (let i = 0; i < formElements.length -1; i++) {
       //info[formElements[i].lastChild.firstChild.id]=formElements[i].lastChild.firstChild.value;
    //   cvElement.childNodes[i].textContent;
    // }
    // allSubmits.push(info);
    // addSubmits(allSubmits);
    // renderCV(section, info, allSubmits.length-1);

    // updaters.forEach((updater) => {
    //   updater("")
   // })

    const buttons = document.querySelector(".buttons");

    formInfo.classList.toggle("hide");
    buttons.classList.toggle("hide");
}

export default function FormEdit (props) {
    return (
      <>      
        <div className={props.section+"-edit"} style={{"padding":"10px"}}>
          <input type="submit" id={props.section} value="edit" onClick={(e) => {e.preventDefault(); click(props.section, props.updaters)}}/>
        </div>
      </>

    )
  }