import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormElement from './components/FormElement'
import CV from './components/Cv'
import {GeneralForm,EditGeneralForm, /*EducationForm, ExperienceForm*/} from './components/SectionForm'
import { GeneralFormCreate, EducationFormCreate, ExperienceFormCreate } from './components/SectionCreate'

function App() {

  const [currentGeneralEdit, newGeneralEdit] = useState({name:"", email:"", phone:""});

  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <div className="edit-info hide">
          <div className="edit-general">
          </div>
          <div className="edit-education"></div>
          <div className="edit-experience"></div>
        </div>
        <div className="cv-render">
          <CV field="general"/>
          <CV field="education"/>
          <CV field="experience"/>
        </div>
        <div className="form-render">
          <GeneralForm editor={newGeneralEdit}/>
          <EditGeneralForm values={currentGeneralEdit}/>
          {/*<EducationForm/>
          <ExperienceForm />*/}
        </div>
       <div className="add-section-render">
        <div className="buttons">
          <GeneralFormCreate/>
          {/* <EducationFormCreate/>
          <ExperienceFormCreate/> */}
        </div>
       </div>
      </main>
    </>
  )
}

export default App
