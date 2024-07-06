const click = (section) => {
    const formInfo = document.querySelector("form").childNodes;
    const formAll = document.querySelector(".form-"+section);
    console.log(formAll);

    const cv = document.createElement('div');
    const form = document.querySelector(".cv-render");
    cv.classList.add(section);

    for (let i = 0; i < formInfo.length - 1; i++) {
        const value = formInfo[i].lastChild.firstChild.value;
        const id = formInfo[i].lastChild.firstChild.id;

        const cvItem = document.createElement('div');
        cvItem.classList.add(id);
        cvItem.classList.add('cv');

        const h2 = document.createElement("h2");
        h2.textContent = id;

        const p = document.createElement('p');
        p.textContent = value;

        cvItem.appendChild(h2);
        cvItem.appendChild(p);
        cv.appendChild(cvItem);
    }

    form.appendChild(cv);
    formAll.classList.toggle('hide');
}

export default function FormSubmit (props) {


    return (
      <div className={props.section} style={{"padding":"10px"}}>
        <input type="submit" id={props.section} value="submit" onClick={(e) => {e.preventDefault(); click(props.section)}}/>
    </div>
    )
  }