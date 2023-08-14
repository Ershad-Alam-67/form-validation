import React, { useState } from "react"

const InvalidInput = (props) => {
  return (
    <div className=" w-screen h-screen bg-black bg-opacity-80 top-0 flex left-0 fixed justify-center items-center">
      <div className="bg-slate-500 rounded-md h-72 w-2/5 ">
        <div className="bg-green-500 w-full h-16 rounded p-4 flex items-center text-white font-bold ">
          <h1 className=" ">Invalid Input</h1>
        </div>
        <div className=" h-40 p-10 text-white">
          <h1>{props.message}</h1>
        </div>
        <div className="flex justify-end pr-5 ">
          <button
            className="mt-2  bg-green-500 pl-5 rounded-md text-white pr-5 pt-2 pb-2"
            onClick={() => {
              props.handleValid(false)
            }}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvalidInput
