import { showEditForm } from "./EditForm";

export default function renderCV (section, formObject, arrayPosition) {
    const sectionCv = document.querySelector(".cv-"+section);
    const cvElement = document.createElement("div");
    cvElement.classList.add(section);
    cvElement.classList.add(arrayPosition);
    cvElement.id = "cv-render-element";

    for (const key in formObject) {
        const p = document.createElement("p");
        p.textContent = key +": "+formObject[key];
        cvElement.appendChild(p)
    }

    cvElement.addEventListener("click", ()=>{
        showEditForm(cvElement);
    })

    sectionCv.appendChild(cvElement);
}