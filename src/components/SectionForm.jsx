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
      normalRender:(
        <div className="form-general hide">
          <h2>Please enter each field</h2>
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
          <h2>Please enter edit fields</h2>
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

function allEducation (editClass, changeUpdater) {

  const [total, updateTotal] = useState(0);
  const school = getFormElement({type:"text", field:"school"})
  const major = getFormElement({type:"text", field:"major"})
  const startSchool = getFormElement({type:"date", field:"start-school"})
  const endSchool = getFormElement({type:"date", field:"end-school"})
  const normalUpdaters = [school.changeElementValue, major.changeElementValue, startSchool.changeElementValue, endSchool.changeElementValue]

  const schoolEdit = getFormElement({type:"text", field:"school"})
  const majorEdit = getFormElement({type:"text", field:"major"})
  const startSchoolEdit = getFormElement({type:"date", field:"start-school"})
  const endSchoolEdit = getFormElement({type:"date", field:"end-school"})
  const editUpdaters = [schoolEdit.changeElementValue, majorEdit.changeElementValue, startSchoolEdit.changeElementValue, endSchoolEdit.changeElementValue]

  

  return ({
      normalRender:(
      <div className="form-education hide">
        <h2>Please enter each field</h2>
        <form>
          {school.render}
          {major.render}
          {startSchool.render}
          {endSchool.render}
          <FormSubmit section="education" normal={normalUpdaters} edit={editUpdaters} changeEdit={changeUpdater} total={total} addTotal={updateTotal} editClass={editClass}/>
        </form>
      </div>),
      editRender:(
        <div className="education-edit hide">
          <h2>Please enter edit fields</h2>
          <form>
            {schoolEdit.render}
            {majorEdit.render}
            {startSchoolEdit.render}
            {endSchoolEdit.render}
            <FormEdit section="education"/>
          </form>
        </div>)
  })
}


function allExperience (editClass, changeUpdater) {

  const [total, updateTotal] = useState(0);
  const company = getFormElement({type:"text", field:"company"})
  const position = getFormElement({type:"text", field:"position"})
  const startJob = getFormElement({type:"date", field:"start-job"})
  const endJob = getFormElement({type:"date", field:"end-job"})
  const repsonsibilites = getFormElement({type:"textarea", field:"responsibility"})
  const normalUpdaters = [company.changeElementValue, position.changeElementValue, startJob.changeElementValue, endJob.changeElementValue, repsonsibilites.changeElementValue]

  const companyEdit = getFormElement({type:"text", field:"company"})
  const positionEdit = getFormElement({type:"text", field:"position"})
  const startJobEdit = getFormElement({type:"date", field:"start-job"})
  const endJobEdit = getFormElement({type:"date", field:"end-job"})
  const repsonsibilitesEdit = getFormElement({type:"textarea", field:"responsibility"})
  const editUpdaters = [companyEdit.changeElementValue, positionEdit.changeElementValue, startJobEdit.changeElementValue, endJobEdit.changeElementValue, repsonsibilitesEdit.changeElementValue]

  return ({
    normalRender:(
    <div className="form-experience hide">
      <h2>Please enter each field</h2>
      <form>
        {company.render}
        {position.render}
        {startJob.render}
        {endJob.render}
        {repsonsibilites.render}
        <FormSubmit section="experience" normal={normalUpdaters} edit={editUpdaters} changeEdit={changeUpdater} total={total} addTotal={updateTotal} editClass={editClass}/>
      </form>
    </div>),
    editRender:(
      <div className="experience-edit hide">
        <h2>Please enter edit fields</h2>
        <form>
          {companyEdit.render}
          {positionEdit.render}
          {startJobEdit.render}
          {endJobEdit.render}
          {repsonsibilitesEdit.render}
          <FormEdit section="exprience"/>
        </form>
      </div>)
})
  
}

export {allGeneral, allEducation, allExperience}