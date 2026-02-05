import React, { useEffect, useState } from 'react';

const App = () => { 
  const [num, setNum] = useState(0);

  function click() {
    setNum(prev => prev + 1);
  }
  useEffect(() => {
    console.log("Gello");
    
  },[num])

  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={click}
        className="px-2 py-1.5 bg-gray-400 border-2 rounded-2xl mt-4"
      >
        Click!
      </button>
    </>
  );
};

export default App;
