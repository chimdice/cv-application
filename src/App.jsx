import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormElement from './components/FormElement'
import CV from './components/Cv'

function App() {

  const [nameInfo, updateNameInfo] = useState("");
  const [cvName, updateCVName] = useState("");

  const [emailInfo, updateEmailInfo] = useState("");
  const [cvEmail, updateCVEmail] = useState("");

  const [phoneInfo, updatePhoneInfo] = useState("");
  const [cvPhone, updateCVPhone] = useState("");

  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
      <div className="current-cv">
          <h2>Current CV</h2>
            <CV field="name" info={cvName}/>
            <CV field="email" info={cvEmail}/>
            <CV field="phone number" info={cvPhone}/>
        </div>
        <div className="form">
          <h2>Please Enter each field</h2>
          <form>
            <FormElement type="text" field="name" value={nameInfo} onClick={updateCVName} onType={updateNameInfo}/>
            <FormElement type="email" field="email" value={emailInfo} onClick={updateCVEmail} onType={updateEmailInfo}/>
            <FormElement type="tel" field="phone-number" value={phoneInfo} onClick={updateCVPhone} onType={updatePhoneInfo}/>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
