import React, { memo } from 'react'

const ChildNumber = (props) => {
    console.log("rendered")
    const changeNumber = () => {
        props.changeNumber(Math.random())
    }
  return (
    <div>
      <h2>Child random Number: {props.childNo}</h2>
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  )
}

export default memo(ChildNumber) 
// Use React memo function when a number is passed is props 
// to child component
// and if the state in child component is not changed 
// but changing state in parent component 
//  the child component rerenders with it 
// then using react memo function prevents that rerender of child component 
// which is not beneficial;


