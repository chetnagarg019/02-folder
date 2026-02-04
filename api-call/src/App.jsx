import React, { useState } from 'react'

const App = () => {

  const [data,setData] = useState([]);

  async function handleClick(){
   const response = await fetch('https://jsonplaceholder.typicode.com/photos');
   const data = await response.json();
   setData(data);
   

   
  }


  return (
   <>
   <button onClick={handleClick} className='bg-gray-300 px-2 py-1.5 rounded-2xl mt-4'>Start Calling api!</button>
   <div>
    {data.map(function(ele,idx){
      return <h2>hello ,{ele.id}, {idx}, {ele.url}  </h2>
    })}
   </div>
    
   </>
  )
}

export default App
