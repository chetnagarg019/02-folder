import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTasks]  = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...task, { user, details }]);
    setUser('');
    setDetails('');
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(user,details);
  //   const copyTask = [...task];
  //   copyTask.push({user,details});
  //   setTasks(copyTask);
  //   // console.log(copyTask);
  //   console.log(task);
    
    
  //   setUser('');
  //   setDetails('');

  // // }

  

  const delteTask = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      
      <h1 className="text-4xl font-bold text-center mb-8">
        📝 Notes App
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">

        {/* FORM - FIXED */}
        <form 
          onSubmit={handleSubmit}
          className="lg:w-1/2 bg-[#111827] p-6 rounded-xl shadow-lg flex flex-col gap-4 h-[320px]"
        >
          <h2 className="text-2xl font-semibold">Add Note</h2>

          <input
            type="text"
            value={user}
            placeholder="Title"
            onChange={(e) => setUser(e.target.value)}
            className="px-4 py-2 rounded bg-[#1f2933] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <textarea
            value={details}
            placeholder="Write your note..."
            onChange={(e) => setDetails(e.target.value)}
            className="px-4 py-2 h-24 resize-none rounded bg-[#1f2933] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 transition py-2 rounded font-semibold cursor-pointer">
            Add Note
          </button>
        </form>

        {/* NOTES - ONLY THIS SCROLLS */}
        <div className="lg:w-1/2 bg-[#111827] p-6 rounded-xl shadow-lg h-[450px] flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>

          <div className="flex flex-wrap gap-5 overflow-y-auto pr-2">
            {task.map((ele, index) => (
              <div
                key={index}
                className="w-44 h-40 bg-[#1f2933] rounded-lg p-3 shadow-md relative hover:bg-[#263041] transition"
              >
                <h3 className="font-bold text-lg text-indigo-400 truncate">
                  {ele.user}
                </h3>

                <p className="text-sm text-gray-300 mt-1 ">
                  {ele.details}
                </p>

                <button
                  onClick={() => delteTask(index)}
                  className="absolute top-2 right-2 text-xs text-gray-400 hover:text-red-400 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

