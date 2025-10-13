import React from "react";
const App = () =>{
  return (
    <>
    <div id = "parent">
      <h1 id = "parent">
        Hello from parent
      </h1>
      <div id = "child">
        <h2>
          Hello from child
        </h2>
      </div>
    </div>
    <div id = "Uncle">
        <h3 id = "Uncle">
          Hello from Uncle
        </h3>
      </div>
    </>
  )
}
export default App;