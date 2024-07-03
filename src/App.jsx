import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CV (props) {
  return (
    <div className="cv">
      <h2>{props.field}</h2>
      <h3>{props.info}</h3>
    </div>
  )
}

function FormElement (props) {

  return (
    <div className="form-element">
      <label htmlFor={props.field}>{props.field}: </label>
      <div>
        <input type={props.type} id={props.field} value={props.value} onChange={(e) => props.onType(e.target.value)}/>
      </div>
      <div>
        <button onClick={(e) => {
          e.preventDefault();
          const input = document.querySelector("#"+props.field);
          props.onClick(input.value)
          }}>Update field</button>
      </div>
    </div>
  )
}

function App() {

  const [nameInfo, updateNameInfo] = useState("");
  const [cvName, updateCVName] = useState("");

  const [emailInfo, updateEmailInfo] = useState("");
  const [phoneInfo, updatePhoneInfo] = useState("");

  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <div className="form">
          <h2>Please Enter each field</h2>
          <form>
            <FormElement type="text" field="name" value={nameInfo} onClick={updateCVName} onType={updateNameInfo}/>
            <FormElement type="email" field="email" value={emailInfo} onClick={updateEmailInfo} onType={updateEmailInfo}/>
            <FormElement type="tel" field="phone number" value={phoneInfo} onClick={updatePhoneInfo} onType={updateEmailInfo}/>
          </form>
        </div>
        <CV field="name" info={cvName}/>
      </main>
    </>
  )
}

export default App
