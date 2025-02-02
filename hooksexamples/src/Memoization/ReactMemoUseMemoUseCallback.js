import React, { useCallback, useMemo, useState } from "react";
import ChildNumber from "./ChildNumber";

const ReactMemoUseMemoUseCallback = () => {
    const [local , setLocal] = useState(0);
    const [childNo, setChildNo] = useState(0);
const [arr, setArr] = useState([10, 2, 3, 1, 4,5, 9,8, 7, 6, 11, 12, 13, 14 ,15 ,18, 17 ,16])

    const memoizedCallabck =  useCallback((childNo) => changeNumber(childNo), [])
    // useCallback(cb, dependencyArray) is used 
    // while passing a function is a prop
    // from parent component to child component to change value of 
    // parent component state inside child component 
    // while parent component state changes and child componet state doesn't
    // but still child component rerenders  
    // to stop such non beneficail rerenders in such case callback are used
    const changeNumber = (changeNo) => {
        setChildNo(changeNo)
    }

    
    const greatestValue = () => {
        console.log("i am working")
        return Math.max(...arr)
    }
    const memoizedValue = useMemo(() => greatestValue() ,[arr])
    // useMemo hook
    // useMemo is used to cache values , for the purpose if any 
    // function or loop state is not changing but on rerender it runs again and again 
    // to stop it from running upon rerender and in the case useMemo hook is used 
    // which caches the value and dont run the loop or function if the value is not changing
    // to optimize performance 
  return <>
    <ChildNumber changeNumber={memoizedCallabck} childNo = {childNo}/>
    
    <h2>Local Number: {local}</h2>
    <button onClick={() => setLocal((prev) => prev + 1)}>Click to increase local number</button>
    <br/ >
    <h3>Max Value in array : {memoizedValue}</h3>
    <button onClick={() => {setArr([20, 10, 40, 50, 100])}}>Click to change the array</button>
  </>;

};

export default ReactMemoUseMemoUseCallback;
