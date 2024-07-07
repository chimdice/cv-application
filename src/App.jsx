import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormElement from './components/FormElement'
import CV from './components/Cv'
import {GeneralForm, EducationForm, ExperienceForm} from './components/SectionForm'
import { GeneralFormCreate, EducationFormCreate, ExperienceFormCreate } from './components/SectionCreate'


function App() {
  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <div className="cv-render">
          <CV field="general"/>
          <CV field="education"/>
          <CV field="experience"/>
        </div>
        <div className="form-render">
          <GeneralForm/>
          <EducationForm/>
          <ExperienceForm />
        </div>
       <div className="add-section-render">
        <div className="buttons">
          <GeneralFormCreate/>
          <EducationFormCreate/>
          <ExperienceFormCreate/>
        </div>
       </div>
      </main>
    </>
  )
}

export default App
