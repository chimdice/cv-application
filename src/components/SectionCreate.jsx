import { GeneralForm, RenderGenral } from "./SectionForm";

const addGeneral = () => {
    const cv = document.querySelector(".cv-render");
    cv.appendChild(RenderGenral);
    //cv.insertBefore(RenderGenral, cv.firstChild);
    const form = document.querySelector(".form-render");
    form.appendChild(GeneralForm);

}

function GeneralFormCreate () {

    return (
        <button onClick={addGeneral}>General +</button>
    )
}

export {GeneralFormCreate}