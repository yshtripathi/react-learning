import React, { useState } from 'react'
import axios from 'axios'
/*
const App = () => {
  async function getData(){
    const get = await fetch('https://jsonplaceholder.typicode.com/todos/100');
    console.log(get);
  }
  const getDatas = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/93');
    const data = await response.json();
    console.log(data);
    
  }
  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>
      <button onClick = {getDatas}>Get Datas</button>
    </div>
  )
}

export default App
*/

const App = () => {
  const [data, setdata] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data );
    setdata(response.data);
  }
  return (
    <div>
      <button onClick = {getData}>
        Get Data  
      </button>
      <div >
        {data.map(function(elem){
          return <div> <h3>Hello, {elem.author}</h3>
          <img src = {elem.download_url} alt = {elem.author} height={100}/> </div>
        })}
      </div>
    </div>
  )
}

export default App