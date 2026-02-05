import React, { useState } from 'react'
import axios from "axios";

const App = () => {

  const[data,setData] = useState([]);

  const Click = async () => {
    const responce =  await axios.get('https://picsum.photos/v2/list?page=3&limit=40');
    setData(responce.data); 
  }

  let imagesData = 'No data available'

  if(data.length > 0){
    imagesData = data.map(function(ele,idx){

     return (
  <div
    key={idx}
    className="h-44 w-44 overflow-hidden rounded-lg"
  >
    <a href={ele.url}>
    <img
      src={ele.download_url}
      alt={ele.author}
      className="h-full w-full object-cover"
    />
    <h1>{ele.author}</h1>
    </a>
  </div>
);


    })
  }





  return (
  <>
  <button onClick={Click} className='px-2 py-1.5 bg-amber-300 border-2 rounded-2xl mt-4'>Start</button>

  <div className='flex flex-wrap gap-3 mt-4'>
{imagesData}

  </div>
  
  </>
  )
}

export default App
