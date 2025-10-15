import React from 'react'

const App = () => {
  function btnClicked() {
    console.log("Button clicked");
  }
  function inputChange(elem){
    console.log("Input changed", elem.target.value);
  }
  return (
    <>
    <div className='bg-amber-400'>
      <h1>
        Hello, Yash
      </h1>
      <input onChange= {inputChange}type="text" placeholder='Enter your name' />
       </div>
       <div>
      <button onClick={btnClicked}>Change user</button>
    </div>
    </>
    
  )
}

export default App