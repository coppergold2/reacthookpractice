/*
In React, useMemo is a hook that allows you to memoize the result of a computation, 
so that it is only recalculated when the dependencies change. 
It is used to optimize the performance of your React components by avoiding unnecessary re-renders.
*/
import React, {useState, useMemo, useEffect} from 'react'

export default function Umemo(){
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    
    const doubleNumber =  useMemo(() => {
        return slowFunction(number)
    },[number])

    const themeStyles = useMemo(() => {
        return{
        backgroundColor: dark? 'black' : 'white',
        color: dark ? 'white' : 'black'}
    }, [dark])

    useEffect(() => {
        console.log("Theme Changed")
    }, [themeStyles])

    return (
        <>
         <input type= "number" value = {number} onChange={e => setNumber(parseInt(e.target.value))} />
         <button onClick= {() => setDark(prevDark => !prevDark)}>Change Theme</button>
         <div style = {themeStyles}>{doubleNumber}</div>
        </>
    )

    function slowFunction(num){
        console.log('Calling Slow Function')
    for (let i = 0; i<= 1000000000; i++ ){}
    return num * 2
    }
}