import { showEditForm } from "./displayEditForm";

export default function renderCV (section, formObject, arrayPosition, editor, on) {
    const sectionCv = document.querySelector(".cv-"+section);
    const cvElement = document.createElement("div");
    cvElement.classList.add(section);
    cvElement.classList.add("c"+arrayPosition);
    cvElement.id = "cv-render-element";
    const cvValues = {}

    for (const key in formObject) {
        const p = document.createElement("p");
        p.textContent = key +": "+formObject[key];
        cvElement.appendChild(p)
        cvValues[key] = formObject[key]
    }

    cvElement.addEventListener("click", ()=>{
        showEditForm(cvElement, editor, cvValues);
    })

    sectionCv.appendChild(cvElement);
}