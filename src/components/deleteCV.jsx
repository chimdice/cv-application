const deleteCV = (className) => {
    const classNameReal = className.replace(" ", ".");
    const cv = document.querySelector("."+classNameReal);
    const parent = cv.parentElement;
    parent.removeChild(cv);
    const options = document.querySelector(".cv-options")
    options.classList.toggle('hide');
}

export default function DeleteButton (props) {


    return (
        <div>
            <button onClick={()=>{deleteCV(props.className)}}>Delete</button>
        </div>
    )
}