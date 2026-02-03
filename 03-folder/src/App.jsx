// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState({user:'chetna', age:20});

//   // function  increaseNum(){
//   //   setNum(num + 1);
//   // }

//   // function  decreaseNum(){
//   //   setNum(num - 1);
//   // }

//   const btnClicked = () => {

//     // const newNum = {...num};
//     // newNum.user = 'akash'
//     // newNum.age = 22;
//     // setNum(newNum);
//     // setNum({ user: 'akyywewe1212yash', age: 22 });
//     setNum(prev => ({...prev, age:32}));
    

//   }




//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}  className='text-xl bg-amber-400 border-2 mt-4 ml-4  mr-4 px-4 py-2 '>Inresae</button>
//       {/* <button  onClick={decreaseNum} className='text-xl bg-amber-400 border-2 px-4 py-2'>decresae</button>     */}

//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form Submitted');
    setUser('');
    
  }

  return (
    <div>
       <form onSubmit={(e) => 
        submitHandler(e)
       }>

        <input type="text"  value={user} onChange={ (e) => setUser(e.target.value)} placeholder='Enter  user name' className='border-2 bg-red-100 px-4 py-1.5 mt-2 ml-4'/>
        <button className='border-2 ml-4 px-3 py-2 bg-gray-100'>Submit</button>

        </form>
 
      
      
    </div>
  )
}

export default App

//two way binding 


