import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormElement from './components/FormElement'
import CV from './components/Cv'
import {GeneralForm, RenderGenral} from './components/SectionForm'

function App() {
  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <div className="cv-render">
          <RenderGenral />
        </div>
        <div className="form-render">
          <GeneralForm />
        </div>
       <div className="add-section-render">
        
       </div>
      </main>
    </>
  )
}

export default App
