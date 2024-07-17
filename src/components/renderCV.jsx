import { showEditForm } from "./displayEditForm";

export default function renderCV (section, formObject, edit, total, editClass, changeEdit) {
    const sectionCv = document.querySelector(".cv-"+section);
    const cvElement = document.createElement("div");
    cvElement.classList.add(section);
    cvElement.classList.add("c"+total);
    cvElement.id = "cv-render-element";

    for (const key in formObject) {
        const p = document.createElement("p");
        p.textContent = key +": "+formObject[key];
        cvElement.appendChild(p)
    }

    cvElement.addEventListener("click", ()=>{
        changeEdit(edit)
        const options = document.querySelector(".cv-options")
        options.classList.toggle('hide');
        editClass(cvElement.className);
    })

    sectionCv.appendChild(cvElement);
}