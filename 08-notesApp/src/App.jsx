import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, details});
    
    settask(copyTask);
    setdetails("");
    settitle("");
    
  }
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);

  }
  return (
   <>
  <div className='min-h-screen flex flex-col lg:flex-row text-white bg-gray-900 p-6 lg:p-10 gap-6 lg:gap-10'>
    
    {/* Form Section */}
    <form
      onSubmit={(e) => submitHandler(e)}
      className='flex flex-col gap-4 lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg'
    >
      <h1 className='text-3xl font-bold mb-4'>Add Notes</h1>

      <input
        type='text'
        placeholder='Enter Task Heading'
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className='px-5 py-2 w-full border-2 rounded outline-none font-medium text-white'
      />

      <textarea
        placeholder='Enter Details'
        value={details}
        onChange={(e) => setdetails(e.target.value)}
        className='px-5 py-4 h-32 w-full border-2 rounded outline-none font-medium text-white'
      />

      <button className='bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-xl transition duration-200 hover:scale-105'>
        Add Notes
      </button>
    </form>

    {/* Notes Section */}
<div className='lg:w-1/2 bg-gray-400 flex flex-col p-6 lg:border-l-2 border-gray-950 rounded-xl'>
      <h1 className='text-3xl font-bold mb-4'>Recent Notes</h1>

      <div className='flex flex-wrap gap-5 overflow-auto max-h-[600px]'>
        {task.map((elem, idx) => (
          <div
            key={idx}
            className='flex justify-between flex-col w-72 rounded-2xl bg-white text-black p-4'
          >
            <div>
              <h3 className='leading-tight text-xl font-bold break-word'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700 break-word'>{elem.details}</p>
            </div>
            <button
              onClick={() => deleteNote(idx)}
              className='w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white py-1 text-xs rounded-2xl font-extrabold hover:scale-105'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
</>

  )
}

export default App