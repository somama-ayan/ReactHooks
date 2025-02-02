import React, { useState, useReducer } from 'react'

const reducer = (state,action) => {
switch(action.type){
    case "increment":
    return {count: state.count + 1}
    case "decrement":
    return {count: state.count - 1}
    case "double":
    return {count: state.count * 2}
    default: 
    return state
}
}
const UseReducerExample = () => {
    // const [count , setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
        {/* simple without reducer */}
      {/* <h2>{count}</h2> */}
      {/* <button onClick={()=> setCount(prev => prev+1)}>increment</button>
      <button onClick={()=> setCount(prev => prev-1)}>decrement</button>
      <button onClick={()=> setCount(prev => prev*2)}>double</button> */}
      {/* with reducer */}

        <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({type: "increment"})}>increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
      <button onClick={() => dispatch({type: "double"})}>double</button>
    </div>
  )
}

export default UseReducerExample
