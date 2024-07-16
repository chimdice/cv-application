import DeleteButton from "./deleteCV"
import EditButton from "./editCV"

export default function CVOptions (props) {

    return (
        <div className="cv-options hide">
            <h2>Edit or Delete CV entry?</h2>
            <div className="option-buttons">
                <EditButton className={props.className} updater={props.updater} />
                <DeleteButton className={props.className}/> 
            </div>
        </div>
    )
}