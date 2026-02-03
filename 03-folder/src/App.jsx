import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  function  increaseNum(){
    setNum(num + 1);
  }

  function  decreaseNum(){
    setNum(num - 1);
  }




  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}  className='text-xl bg-amber-400 border-2 mt-4 ml-4  mr-4 px-4 py-2 '>Inresae</button>
      <button  onClick={decreaseNum} className='text-xl bg-amber-400 border-2 px-4 py-2'>decresae</button>


    

    </div>
  )
}

export default App
