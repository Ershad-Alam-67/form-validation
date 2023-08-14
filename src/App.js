import MainForm from "./MainForm"
import InvalidInput from "./InvalidInput"
import "./App.css"
import React, { useState } from "react"

function App() {
  const [valid, setValid] = useState(false)
  const [message, setMessage] = useState("message")
  function onHandleMessage(m) {
    setMessage(m)
  }
  const onHandleValid = (a) => {
    setValid(a)
  }
  return (
    <div className="App">
      <MainForm handleValid={onHandleValid} handleMessage={onHandleMessage} />
      {valid && <InvalidInput message={message} handleValid={onHandleValid} />}
    </div>
  )
}

export default App
