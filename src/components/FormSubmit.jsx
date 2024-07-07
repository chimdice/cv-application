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

    form.appendChild(cv);
    formAll.classList.toggle('hide');

    if (section === 'general') {
      const generalButton = document.querySelector('.general-button');
      generalButton.classList.toggle('hide');

    }

    const buttons = document.querySelector('.buttons');
    buttons.classList.toggle('hide');
}

export default function FormSubmit (props) {


    return (
      <div className={props.section} style={{"padding":"10px"}}>
        <input type="submit" id={props.section} value="submit" onClick={(e) => {e.preventDefault(); click(props.section)}}/>
    </div>
    )
  }