const click = () => {
    const formInfo = document.querySelector(".form-submit").parentNode.childNodes;
    for (let i = 0; i < formInfo.length - 1; i++) {
        const value = formInfo[i].lastChild.firstChild.value;
        const id = formInfo[i].lastChild.firstChild.id;

        const cv = document.querySelector(".cv  #"+id)
        cv.textContent = value;
        console.log(formInfo[i].lastChild.firstChild.id)
    }
}

export default function FormSubmit () {


    return (
      <div className="form-submit" style={{"padding":"10px"}}>
        <input type="submit" id="form-sumbit" value="submit" onClick={(e) => {e.preventDefault(); click()}}/>
    </div>
    )
  }