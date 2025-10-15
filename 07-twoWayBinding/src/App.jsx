import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState("")
  const handleSubmit = (e)  => {
    e.preventDefault();
    console.log("Form submitted", name);
    setname("");
    
  }
  return (
   <>
   <form onSubmit={(e) => {handleSubmit(e)}}>

    <input type = "text" 
    placeholder='Enter your Name'
    value = {name}
    onChange = {(e) => { setname(e.target.value)}}/>
    <button type = "submit">Submit</button>
    </form></>
  )
}

export default App