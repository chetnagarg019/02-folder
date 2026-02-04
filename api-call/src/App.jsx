import React from 'react'

const App = () => {

  function handleClick(){
   console.log("Data aa gya");
   
  }


  return (
   <>
   <button onClick={handleClick} className='bg-gray-300 px-2 py-1.5 rounded-2xl mt-4'>Start Calling api!</button>
   </>
  )
}

export default App
