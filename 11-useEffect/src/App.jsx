import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  useEffect(() => {
    console.log("Number is changing", {num});
  },[num])
  
  return (
    <div>
      <h3>{num}</h3>
      <div>
      <button onClick={() => {setnum(num + 1)}}>Update</button>
      </div>
    </div>
  )
}

export default App