import React, { useState, useEffect } from "react"

const MainForm = (props) => {
  const [arr, setArr] = useState([])
  const [userName, setUserName] = useState("")

  const [age, setAge] = useState("")
  function handleAge(e) {
    setAge(e.target.value)
  }
  function handleUserName(e) {
    setUserName(e.target.value)
  }

  const validationCheck = () => {
    if (age.length === 0 || userName.length === 0) {
      props.handleMessage("Plese Fill all the informations!")
      props.handleValid(true)

      return
    }
    if (parseInt(age) <= 0) {
      props.handleMessage("Please Enter a Valid Age (>0)")
      props.handleValid(true)
      return
    }
    if (isNaN(age)) {
      props.handleMessage("Age must be a valid number")
      props.handleValid(true)
      return
    }
    const obj = {
      userName: userName,
      age: age,
    }
    setArr([...arr, obj])
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className=" bg-slate-700 h-52 rounded-md w-80 mt-12">
          <div className="ml-8  mt-3">
            <div className="mt-2">
              <label className="font-bold text-white">Username</label>
            </div>
            <input
              type="text"
              onChange={handleUserName}
              className="bg-green-400 p-1 text-white hover:bg-green-600  rounded-md mt-1"
            ></input>
            <div className="mt-2">
              <label className=" text-white font-bold">Age(Years)</label>
            </div>
            <input
              type="tel"
              pattern="[0-9]*"
              className=" bg-green-400 hover:bg-green-600 border-s-0 text-white p-1 mt-2 rounded-md"
              onChange={handleAge}
            ></input>
            <div className="flex justify-center mr-7 mt-3">
              <button
                onClick={validationCheck}
                className="bg-green-700 p-2 text-white font-semibold rounded-md shadow shadow-white "
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
      {arr.length != 0 && (
        <div className="flex justify-center">
          <div className=" font-semibold bg-slate-700  rounded-md w-80 mt-12 p-3 ">
            <div className="pl-2 pt-1 pr-2 pb-1 rounded-md  bg-slate-300">
              <ul className=" ">
                {arr.map((item) => (
                  <li>
                    {item.userName}({item.age} years old)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainForm
