import { useState } from "react";
import CV from "./Cv";
import FormElement from "./FormElement";

export default function GeneralForm () {

    const [nameInfo, updateNameInfo] = useState("");
    const [cvName, updateCVName] = useState("");

    const [emailInfo, updateEmailInfo] = useState("");
    const [cvEmail, updateCVEmail] = useState("");

    const [phoneInfo, updatePhoneInfo] = useState("");
    const [cvPhone, updateCVPhone] = useState("");

    return (
        <>
        <div className="current-cv">
          <h2>Current CV</h2>
            <CV field="name" info={cvName}/>
            <CV field="email" info={cvEmail}/>
            <CV field="phone number" info={cvPhone}/>
        </div>
        <div className="form">
          <h2>Please Enter each field</h2>
          <form>
            <FormElement type="text" field="name" value={nameInfo} onClick={updateCVName} onType={updateNameInfo}/>
            <FormElement type="email" field="email" value={emailInfo} onClick={updateCVEmail} onType={updateEmailInfo}/>
            <FormElement type="tel" field="phone-number" value={phoneInfo} onClick={updateCVPhone} onType={updatePhoneInfo}/>
          </form>
        </div>
        </>
    )

}