
const click = (section) => {
    const formAll = document.querySelector(".form-"+section);
    const formInfo = formAll.lastChild.childNodes;
    console.log(formInfo);

    const cv = document.createElement('div');
    cv.setAttribute("style", "margin-bottom:10px")
    const form = document.querySelector(".cv-"+section);
    cv.classList.add(section);

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
      const className = cv.className;
      const form = document.querySelector(".form-"+className);
      const buttons = document.querySelector(".buttons")

      if (form.classList.contains("hide")) {
          form.classList.toggle("hide");
          buttons.classList.toggle("hide");
      }


      const submit = document.querySelector("."+className+" #"+className);
      const edit = document.querySelector("#"+className+"-edit");

      console.log(submit);
      console.log(edit)

      if (edit.classList.contains("hide")) {
          submit.classList.toggle("hide");
          edit.classList.toggle("hide"); 
      }
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

const edit = (section) => {
  const cv = document.querySelector(".cv-"+section +" ."+section);
  const className = cv.className;

  const form = document.querySelector(".form-"+className);
  const submit = document.querySelector("."+className+" #"+className);
  const edit = document.querySelector("#"+className+"-edit");
  const buttons = document.querySelector(".buttons")

  console.log(cv);
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


    return (
      <>      
        <div className={props.section} style={{"padding":"10px"}}>
          <input type="submit" id={props.section} value="submit" onClick={(e) => {e.preventDefault(); click(props.section)}}/>
          <input type="submit" id={props.section+"-edit"} className="hide" value="edit" onClick={(e)=>{e.preventDefault(); edit(props.section)}}/>
        </div>
      </>

    )
  }