import React, { useState, useRef, useEffect } from 'react'

export default function Uref(){
    const [name, setName] = useState('')
    const renderCount = useRef(1);   
    useEffect (() => {                      //1 combine useref and useeffect
        renderCount.current = renderCount.current+1;
    })

    const inputRef = useRef()
    const focus = (() =>          //2 most common use which is to use it in a input tag
    inputRef.current.focus())    

    const prevName = useRef('')
                                 //3 store previousvalue
    useEffect(() => {
        prevName.current = name;
    },[name])
    
    return (
        <>
        <input ref = {inputRef} value ={name} onChange = {e => setName(e.target.value)}/>
        <div>My name is {name} </div>
        <div> I rendered {renderCount.current} times</div>
        <div>Previous name is {prevName.current}</div>
        <button onClick={focus}> Focus </button>
        </>
    )
}