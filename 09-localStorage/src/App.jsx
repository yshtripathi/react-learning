import React from 'react'

const App = () => {
  const user = {name: "Yash", age:"21"};
  localStorage.setItem("1", JSON.stringify(user));
  const value = JSON.parse(localStorage.getItem("1"));
  console.log(value);
  

    return (
    <div>App</div>
  )
}

export default App