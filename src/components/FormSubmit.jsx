import { useState } from "react";

const click = (section, numEducation, updateNumEducation, numExperience, updateNumExperience, newCurrentEdit) => {
    const formAll = document.querySelector(".form-"+section);
    const formInfo = formAll.lastChild.childNodes;
    console.log(formInfo);

    const cv = document.createElement('div');
    cv.setAttribute("style", "margin-bottom:10px")
    const form = document.querySelector(".cv-"+section);

    if (section === 'education') {
      console.log(numEducation);
      cv.classList.add(section);
      cv.classList.add("e"+numEducation);
      updateNumEducation(numEducation+1);
    } else if (section === 'experience') {
      console.log(numExperience);
      cv.classList.add(section);
      cv.classList.add("e"+numExperience);
      updateNumExperience(numExperience+1)
    } else {
      cv.classList.add(section);
    }

  
    for (let i = 0; i < formInfo.length - 1; i++) {
        const value = formInfo[i].lastChild.firstChild.value;
        const id = formInfo[i].lastChild.firstChild.id;

        const cvItem = document.createElement('div');
        cvItem.classList.add(id);
        cvItem.classList.add('cv');

        const h2 = document.createElement("h2");
        h2.textContent = id+": ";

        const p = document.createElement('p');
        p.textContent = value;

        cvItem.appendChild(h2);
        cvItem.appendChild(p);
        cv.appendChild(cvItem);
    }


    cv.addEventListener("click", ()=>{
      const classNameAll = cv.classList;
      newCurrentEdit(classNameAll);
      console.log(classNameAll)
      const className = classNameAll[0]
      const form = document.querySelector(".form-"+className);
      const buttons = document.querySelector(".buttons")

      if (form.classList.contains("hide")) {
          form.classList.toggle("hide");
          buttons.classList.toggle("hide");
      }


      const submit = document.querySelector("."+className+" #"+className);
      const edit = document.querySelector("#"+className+"-edit");


      if (edit.classList.contains("hide")) {
          submit.classList.toggle("hide");
          edit.classList.toggle("hide"); 
      }


      // for (let i = 0; i < cv.childNodes.length; i++) {
      //   form.lastChild.childNodes[i].lastChild.firstChild.value = cv.childNodes[i].lastChild.textContent;
      // };


    })

    form.appendChild(cv);
    formAll.classList.toggle('hide');

    if (section === 'general') {
      const generalButton = document.querySelector('.general-button');
      if (! generalButton.classList.contains('hide')) {
        generalButton.classList.toggle('hide');
      }
    }

    const buttons = document.querySelector('.buttons');
    buttons.classList.toggle('hide');
}

const edit = (section, currentEdit) => {
  let current ="";

  currentEdit.forEach(element => {
    current += ("."+element)
  });

  const cv = document.querySelector(current);
  console.log(current);
  console.log(cv)

  const form = document.querySelector(".form-"+section);
  const submit = document.querySelector("."+section+" #"+section);
  const edit = document.querySelector("#"+section+"-edit");
  const buttons = document.querySelector(".buttons")

  const cvElements = cv.childNodes;
  for (let i = 0; i < cvElements.length; i++){
      const newValue = form.lastChild.childNodes[i].lastChild.firstChild.value;
      cvElements[i].lastChild.textContent = newValue;
  }

  submit.classList.toggle("hide");
  edit.classList.toggle("hide");
  form.classList.toggle("hide");
  buttons.classList.toggle("hide");
}

export default function FormSubmit (props) {

  const [numEducation, updateNumEducation] = useState(0);
  const [numExperience, updateNumExperience] = useState(0);
  const [currentEdit, newCurrentEdit] = useState("");


    return (
      <>      
        <div className={props.section} style={{"padding":"10px"}}>
          <input type="submit" id={props.section} value="submit" onClick={(e) => {e.preventDefault(); click(
            props.section, numEducation, updateNumEducation, numExperience,
            updateNumExperience, newCurrentEdit)}}/>
          <input type="submit" id={props.section+"-edit"} className="hide" value="edit" onClick={(e)=>{e.preventDefault(); edit(props.section, currentEdit)}}/>
        </div>
      </>

    )
  }