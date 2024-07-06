const addGeneral = () => {
    const general = document.querySelector(".form-general");
    const buttons = document.querySelector(".buttons");

    general.classList.toggle("hide");
    buttons.classList.toggle("hide");

}

function GeneralFormCreate () {

    return (
        <button onClick={addGeneral}>General +</button>
    )
}

export {GeneralFormCreate}