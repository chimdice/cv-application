const showEditForm = (cv) => {
    const section = cv.classList[0]
    const numberID = cv.classList[1];
    const className = section+"-edit"
    const editForm = document.querySelector("."+className);
    editForm.classList.add(numberID);

    const allForms = document.querySelector(".form-render").childNodes;
    allForms.forEach((form)=>{
        if ((! form.classList.contains(className))&&(! form.classList.contains('hide'))) {
            form.classList.toggle("hide")
        }
    })

    const buttons = document.querySelector(".buttons");
    if (! buttons.classList.contains('hide')){
        buttons.classList.toggle('hide');
    }

    if (editForm.classList.contains('hide')){
        editForm.classList.toggle('hide');
    }
}

export {showEditForm};