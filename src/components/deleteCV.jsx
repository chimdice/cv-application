const deleteCV = (className) => {
    //const cv = document.querySelector(className)
    console.log(className)
}

export default function DeleteButton (props) {


    return (
        <div>
            <button onClick={()=>{deleteCV(props.className)}}>Delete</button>
        </div>
    )
}