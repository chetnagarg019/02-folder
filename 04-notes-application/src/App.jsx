// import React, {  useState } from 'react'

// const App = () => {

//   const [user, setUser] = useState('');
//   const [details, setDetails] = useState('');
//   const [task, setTasks]  = useState([])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(user,details);
//     const copyTask = [...task];
//     copyTask.push({user,details});
//     setTasks(copyTask);
//     // console.log(copyTask);
//     console.log(task);
    
    
//     setUser('');
//     setDetails('');

//   }

//   const delteTask = (index) => {
//     const copyTask = [...task];
//     copyTask.splice(index,1);
//     setTasks(copyTask);
//   }
  
//   return (
//     <div>
//       <form className='flex flex-col border-2 gap-4' onSubmit={handleSubmit}>
//         <div>
//         <input type="text"  value = {user}placeholder='Enter heading' onChange={(e) => setUser(e.target.value)}
//  className='px-4 py-2 bg-pink-200 border-2 rounded' />
//         <textarea type="text" value={details} placeholder='Enter details' onChange={(e) => setDetails(e.target.value)}
//  className='px-2 py-8 bg-pink-200 border-2 rounded' />
//         <button className='border-2 '>Submit</button>
//         </div>
//         {/* <img className='w-1/2' src="https://cdn-icons-png.flaticon.com/512/2038/2038509.png" alt="" /> */}
//       </form>

//       <div className='lg:w-1/2 lg:border-l-2 p-10'>
//         <h1 className='text-4xl font-bold'>Notes here</h1>
//         <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
//         {task.map(function(ele,index){
//           return <div key={index} className="h-52 w-40 rounded-xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
//             <h3 className='text-green-300 text-2xl font-bold px-4 mt-4  py-1.5'>{ele.user}</h3>
//             <p className='text-green-300  text-md  font-medium px-2 py-1.5'>{ele.details}</p>
//             <button className='border-2  bg-amber-200 cursor-pointer' onClick={() => {
//               delteTask(index)
//             }}>Delete Task</button>
//           </div>
//         })}
          


//         </div>


//       </div>
      
//     </div>
//   )
// }

// export default App

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

          <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 transition py-2 rounded font-semibold">
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

                <p className="text-sm text-gray-300 mt-1 break-words">
                  {ele.details}
                </p>

                <button
                  onClick={() => delteTask(index)}
                  className="absolute top-2 right-2 text-xs text-gray-400 hover:text-red-400"
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

