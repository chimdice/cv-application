import { showEditForm } from "./displayEditForm";

const editCV = (className, updater) => {
    const classNameReal = className.replace(" ", ".");
    const cv = document.querySelector("."+classNameReal);
    const options = document.querySelector(".cv-options")
    options.classList.toggle('hide');
    showEditForm(cv);
    const elements = cv.childNodes;
    for (let i = 0; i < elements.length; i++) {
        const [first,...value] = elements[i].textContent.split(":")
        const valueC = value.join(":")
        updater[i](valueC);
    }
}

export default function EditButton (props) {


    return (
        <div>
            <button onClick={()=>{editCV(props.className, props.updater)}}>Edit</button>
        </div>
    )
}