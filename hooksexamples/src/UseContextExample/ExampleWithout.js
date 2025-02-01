import React, { useState } from 'react'

const ExampleWithout = () => {
    const [isToggle , setIsToggle] = useState(false);

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildToggle setIsToggle={setIsToggle}/>
      <ChildDisplay isToggle={isToggle}/>

    </div>
  )
}

export default ExampleWithout



const ChildToggle = ({setIsToggle}) => {
  return (
    <div>
        <button onClick={() => setIsToggle((prev) => !prev)}>toggle</button>
   
    </div>
  )
}
const ChildDisplay = ({isToggle}) => {
    return (
      <div>
        <p>Current Toggle state: {isToggle? "ON": "OFF"}</p>
      </div>
    )
  }


