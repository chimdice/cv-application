import { useState } from "react";
import CV from "./Cv";
import getFormElement from "./FormElement";
import FormSubmit from "./FormSubmit";
import FormEdit from "./EditSubmit";

function allGeneral (editClass, changeUpdater) {

    const [total, updateTotal] = useState(0);
    const name = getFormElement({type:"text", field:"name"})
    const email = getFormElement({type:"email", field:"email"})
    const phone = getFormElement({type:"tel", field:"phone-number"})
    const normalUpdaters = [name.changeElementValue, email.changeElementValue, phone.changeElementValue]

    const nameEdit = getFormElement({type:"text", field:"name"})
    const emailEdit = getFormElement({type:"email", field:"email"})
    const phoneEdit = getFormElement({type:"tel", field:"phone-number"})
    const editUpdaters = [nameEdit.changeElementValue, emailEdit.changeElementValue, phoneEdit.changeElementValue]


    return ({
      normalUpdaters,
      editUpdaters,
      normalRender:(
        <div className="form-general hide">
          <h2>Please Enter each field</h2>
          <form>
            {name.render}
            {email.render}
            {phone.render}
            <FormSubmit section="general" normal={normalUpdaters} edit={editUpdaters} changeEdit={changeUpdater} total={total} addTotal={updateTotal} editClass={editClass}/>
          </form>
        </div>
        ),
      editRender:(
        <div className="general-edit hide">
          <h2>Please Enter edit fields</h2>
          <form>
            {nameEdit.render}
            {emailEdit.render}
            {phoneEdit.render}
            <FormEdit section="general"/>
          </form>
      </div>
      )
  })

}

function EditGeneralForm ({values}) {

  const name = getFormElement({type:"text", field:"name"})
  const email = getFormElement({type:"email", field:"email"})
  const phone = getFormElement({type:"tel", field:"phone-number"})

  const updaters = [name.changeElementValue, email.changeElementValue, phone.changeElementValue]

  
  return (
      <>
      <div className="general-edit hide">
        <h2>Please Enter edit fields</h2>
        <form>
          {name.render}
          {email.render}
          {phone.render}
          <FormEdit section="general" updaters={updaters}/>
        </form>
      </div>
      </>
  )

}

// function EducationForm () {

//   const [schoolName, updateSchoolName] = useState("");
//   const [majorName, updateMajorName] = useState("");
//   const [startDate, updateStartDate] = useState("");
//   const [endDate, updateEndDate] = useState("");

//   return (
//       <>
//       <div className="form-education hide">
//         <h2>Please Enter each field</h2>
//         <form>
//           <FormElement type="text" field="school" value={schoolName} onType={updateSchoolName}/>
//           <FormElement type="text" field="major" value={majorName} onType={updateMajorName}/>
//           <FormElement type="date" field="start-school" value={startDate} onType={updateStartDate}/>
//           <FormElement type="date" field="end-school" value={endDate} onType={updateEndDate}/>
//           <FormSubmit section="education"/>
//         </form>
//       </div>
//       </>
//   )
// }


// function ExperienceForm () {

//   const [companyName, updateCompanyName] = useState("");
//   const [positionName, updatePositionName] = useState("");
//   const [responsibilites, updateResponsibilites] = useState("")
//   const [startDate, updateStartDate] = useState("");
//   const [endDate, updateEndDate] = useState("");

//   return (
//       <>
//       <div className="form-experience hide">
//         <h2>Please Enter each field</h2>
//         <form>
//           <FormElement type="text" field="company" value={companyName} onType={updateCompanyName}/>
//           <FormElement type="text" field="title" value={positionName} onType={updatePositionName}/>
//           <FormElement type="text" field="repsonsibilites" value={responsibilites} onType={updateResponsibilites}/>
//           <FormElement type="date" field="start-company" value={startDate} onType={updateStartDate}/>
//           <FormElement type="date" field="end-company" value={endDate} onType={updateEndDate}/>
//           <FormSubmit section="experience"/>
//         </form>
//       </div>
//       </>
//   )
// }

export {allGeneral,/*EducationForm, ExperienceForm*/}