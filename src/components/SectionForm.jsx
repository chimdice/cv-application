import { useState } from "react";
import CV from "./Cv";
import FormElement from "./FormElement";
import FormSubmit from "./FormSubmit";

function GeneralForm () {

    const [nameInfo, updateNameInfo] = useState("");
    const [emailInfo, updateEmailInfo] = useState("");
    const [phoneInfo, updatePhoneInfo] = useState("");

    return (
        <>
        <div className="form-general hide-form">
          <h2>Please Enter each field</h2>
          <form>
            <FormElement type="text" field="name" value={nameInfo} onType={updateNameInfo}/>
            <FormElement type="email" field="email" value={emailInfo} onType={updateEmailInfo}/>
            <FormElement type="tel" field="phone-number" value={phoneInfo} onType={updatePhoneInfo}/>
            <FormSubmit section="general"/>
          </form>
        </div>
        </>
    )

}

function RenderGenral () {
  return(
    <div className="cv-general">
      <h2>Current CV</h2>
      <CV field="name"/>
      <CV field="email"/>
      <CV field="phone-number"/>
      </div>
  )
}

function EducationForm () {

  const [schoolName, updateSchoolName] = useState("");
  const [majorName, updateMajorName] = useState("");
  const [startDate, updateStartDate] = useState("");
  const [endDate, updateEndDate] = useState("");

  return (
      <>
      <div className="current-cv">
        <h2>Current CV</h2>
          <CV field="school"/>
          <CV field="email"/>
          <CV field="start-school"/>
          <CV field="end-school"/>
      </div>
      <div className="form">
        <h2>Please Enter each field</h2>
        <form>
          <FormElement type="text" field="school" value={schoolName} onType={updateSchoolName}/>
          <FormElement type="text" field="major" value={majorName} onType={updateMajorName}/>
          <FormElement type="date" field="start-school" value={startDate} onType={updateStartDate}/>
          <FormElement type="date" field="end-school" value={endDate} onType={updateEndDate}/>
          <FormSubmit />
        </form>
      </div>
      </>
  )
}

export {GeneralForm, RenderGenral}