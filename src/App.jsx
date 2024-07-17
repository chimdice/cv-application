import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormElement from './components/FormElement'
import CV from './components/Cv'
import { allGeneral, allEducation, allExperience} from './components/SectionForm'
import { GeneralFormCreate, EducationFormCreate, ExperienceFormCreate } from './components/SectionCreate'
import CVOptions from './components/CVOptions'

function App() {

  const [currentEdit, changeCurrentEdit] = useState("");
  const [currentUpdater, changeCurrentUpdater] = useState([]);

  const general = allGeneral(changeCurrentEdit, changeCurrentUpdater);
  const education = allEducation(changeCurrentEdit, changeCurrentUpdater);
  const experience = allExperience(changeCurrentEdit, changeCurrentUpdater);

  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <div className="edit-info hide">
        </div>
        <div className="cv-render">
          <CV field="general"/>
          <CV field="education"/>
          <CV field="experience"/>
        </div>
        <div className="form-render">
          {general.normalRender}
          {general.editRender}
          {education.normalRender}
          {education.editRender}
          {experience.normalRender}
          {experience.editRender}
        </div>
       <div className="add-section-render">
        <div className="buttons">
          <GeneralFormCreate/>
          <EducationFormCreate/>
          <ExperienceFormCreate/>
        </div>
        <div className="cv-entry-options">
            <CVOptions className={currentEdit} updater={currentUpdater}/>
        </div>
       </div>
      </main>
    </>
  )
}

export default App
