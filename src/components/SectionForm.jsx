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
        <div className="form-general hide">
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

function EducationForm () {

  const [schoolName, updateSchoolName] = useState("");
  const [majorName, updateMajorName] = useState("");
  const [startDate, updateStartDate] = useState("");
  const [endDate, updateEndDate] = useState("");

  return (
      <>
      <div className="form-education hide">
        <h2>Please Enter each field</h2>
        <form>
          <FormElement type="text" field="school" value={schoolName} onType={updateSchoolName}/>
          <FormElement type="text" field="major" value={majorName} onType={updateMajorName}/>
          <FormElement type="date" field="start-school" value={startDate} onType={updateStartDate}/>
          <FormElement type="date" field="end-school" value={endDate} onType={updateEndDate}/>
          <FormSubmit section="education"/>
        </form>
      </div>
      </>
  )
}


function ExperienceForm () {

  const [companyName, updateCompanyName] = useState("");
  const [positionName, updatePositionName] = useState("");
  const [responsibilites, updateResponsibilites] = useState("")
  const [startDate, updateStartDate] = useState("");
  const [endDate, updateEndDate] = useState("");

  return (
      <>
      <div className="form-experience hide">
        <h2>Please Enter each field</h2>
        <form>
          <FormElement type="text" field="company" value={companyName} onType={updateCompanyName}/>
          <FormElement type="text" field="title" value={positionName} onType={updatePositionName}/>
          <FormElement type="text" field="repsonsibilites" value={responsibilites} onType={updateResponsibilites}/>
          <FormElement type="date" field="start-company" value={startDate} onType={updateStartDate}/>
          <FormElement type="date" field="end-company" value={endDate} onType={updateEndDate}/>
          <FormSubmit section="experience"/>
        </form>
      </div>
      </>
  )
}

export {GeneralForm, EducationForm, ExperienceForm}