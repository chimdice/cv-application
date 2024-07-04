import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormElement from './components/FormElement'
import CV from './components/Cv'
import GeneralForm from './components/SectionForm'

function App() {
  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <GeneralForm />
      </main>
    </>
  )
}

export default App
