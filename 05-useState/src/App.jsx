import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const[user, setUser] = useState("Aman");
  const [nums, setnums] = useState([1,2,3,4,5]);
  const [obj, setobj] = useState({name: "Aman", age: "21"});
  const [increaseby4, setincreaseby4] = useState(0)
  function incrementCount(){
    console.log(count);
    setCount(count + 1);
    setUser("Ayush");
  }
  function decrementCount(){
    console.log(count);
    setCount(count - 1);
    setUser("Yash");
  }
  function updateObj(){
    const newObj = {...obj};
    newObj.name = "Ujjawal";
    newObj.age= "22";
    setobj(newObj);
  }
  function updateArray(){
    const newArr = [...nums]
    newArr.push(6);
    setnums(newArr);
  }
  function batchUpdate(){
    setincreaseby4(prev => ( prev+1));
    setincreaseby4(prev => ( prev+1));
    setincreaseby4(prev => ( prev+1));
    setincreaseby4(prev => ( prev+1));
  }
      return (
    <div>
      <h1>After updating the count {count} 
        <br/> After updating the user String {user} 
           <br/> After updating the array {nums} 
            <br/> After updating the object {JSON.stringify(obj)} 
              <br/>{obj.name}, {obj.age}
                <br/> After batch update {increaseby4}
      </h1>
      <button onClick= {incrementCount}>Increment Count</button>
        <button onClick= {decrementCount}>Decrement Count</button>
          <button onClick={updateObj}>Updating the object</button>
            <button onClick={updateArray}>Updating the array</button>
              <button onClick={batchUpdate}>Batch Update</button>

    </div>
  )
}

export default App