import React, { createContext, useContext, useState } from 'react'

const GlobalContextExample = createContext(null)
const ExampleWith = () => {
 const [isToggle , setIsToggle] = useState(false);
 
   return (
     <div>
        <GlobalContextExample.Provider value={{isToggle, setIsToggle}}>
       <h2>Parent Component</h2>
       <ChildToggle />
       <ChildDisplay />
        </GlobalContextExample.Provider>
    </div>
  )
}

export default ExampleWith


const ChildToggle = () => {
    const {setIsToggle} = useContext(GlobalContextExample)
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>toggle</button>
    </div>
  )
}
const ChildDisplay = () => {
    const {isToggle} = useContext(GlobalContextExample)
    return (
      <div>
        <p>Current Toggle state: {isToggle? "ON": "OFF"}</p>
      </div>
    )
  }


