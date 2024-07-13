import { useState } from "react";
import CV from "./Cv";
import getFormElement from "./FormElement";
import FormSubmit from "./FormSubmit";
import FormEdit from "./EditSubmit";

function allGeneral () {

    const [allSubmits, addSubmits] = useState([{name:"", email: "", phone:""}])
    const [currentEdit, changeCurrentEdit] = useState(0)
    const [renderGeneralEdit, setRenderGeneralEdit] = useState(false)
  
    const name = getFormElement({type:"text", field:"name"})
    const email = getFormElement({type:"email", field:"email"})
    const phone = getFormElement({type:"tel", field:"phone-number"})

    const updaters = [name.changeElementValue, email.changeElementValue, phone.changeElementValue]

    const nameEdit = getFormElement({type:"text", field:"name", initalValue:allSubmits[currentEdit].name, show:true})
    const emailEdit = getFormElement({type:"email", field:"email", initalValue:allSubmits[currentEdit].email})
    const phoneEdit = getFormElement({type:"tel", field:"phone-number", initalValue:allSubmits[currentEdit].phone})
  
    const updatersEdit = [name.changeElementValue, email.changeElementValue, phone.changeElementValue]

    return ({
      renderGeneralEdit,
      normalRender:(
        <div className="form-general hide">
          <h2>Please Enter each field</h2>
          <form>
            {name.render}
            {email.render}
            {phone.render}
            <FormSubmit section="general" allSubmits={allSubmits} addSubmits={addSubmits} updaters={updaters} edit={changeCurrentEdit} renderEdit={setRenderGeneralEdit}/>
          </form>
        </div>
        ),
      editRender:(
        <div className="general-edit hide">
          <h2>Please Enter edit fields</h2>
          <form>
            {renderGeneralEdit&&nameEdit.render}
            {emailEdit.render}
            {phoneEdit.render}
            <FormEdit section="general" updaters={updatersEdit}/>
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