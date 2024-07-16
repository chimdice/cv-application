import { showEditForm } from "./displayEditForm";

export default function renderCV (section, formObject, edit, total) {
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

    const elements = cvElement.childNodes;
    cvElement.addEventListener("click", ()=>{
        showEditForm(cvElement);
        for (let i = 0; i < elements.length; i++) {
            const [first,...value] = elements[i].textContent.split(":")
            const valueC = value.join(":")
            edit[i](valueC);
        }
    })

    sectionCv.appendChild(cvElement);
}