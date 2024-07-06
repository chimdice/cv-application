function GeneralFormCreate () {

    const addSection = () => {
        const general = document.querySelector(".form-general");
        const buttons = document.querySelector(".buttons");
        console.log(buttons)
    
        console.log(general);
        general.classList.toggle("hide");
        buttons.classList.toggle("hide");
    
    }

    return (
        <button onClick={addSection} className="general-button">General +</button>
    )
}

function EducationFormCreate () {

    const addSection = () => {
        const general = document.querySelector(".form-education");
        const buttons = document.querySelector(".buttons");
    
        console.log(general);
        general.classList.toggle("hide");
        buttons.classList.toggle("hide");
    
    }


    return (
        <button onClick={addSection} className="education-button">Education +</button>
    )
}

function ExperienceFormCreate () {

    const addSection = () => {
        const general = document.querySelector(".form-experience");
        const buttons = document.querySelector(".buttons");
    
        console.log(general);
        general.classList.toggle("hide");
        buttons.classList.toggle("hide");
    
    }

    
    return (
        <button onClick={addSection} className="experience-button">Experience +</button>
    )
}


export {GeneralFormCreate, EducationFormCreate, ExperienceFormCreate}