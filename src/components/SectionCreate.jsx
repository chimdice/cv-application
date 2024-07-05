const addGeneral = () => {
    const general = document.querySelector(".form-general");
    console.log(general);
    general.classList.toggle("hide-form");
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.style.display = 'none';
    })

}

function GeneralFormCreate () {

    return (
        <button onClick={addGeneral}>General +</button>
    )
}

export {GeneralFormCreate}