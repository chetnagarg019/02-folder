import React from 'react'

const App = () => {

  function btnclicked(){
    console.log("btn clicked by user");
    
  }
  return (
    <>

    <div className='bg-red-500 text-white text-2xl px-4 py-2 font-bold'>
      hello i am chetna
    </div>

    <button className='border-2  px-4 py-4 bg-pink-300' onClick={btnclicked}>click me</button>
    
    </>

  )
}

export default App
