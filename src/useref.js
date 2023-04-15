import React, { useState, useRef, useEffect } from 'react'

export default function Uref(){
    const [name, setName] = useState('')

    return (
        <>
        <input value ={name} onChange = {e => setName(e.target.value)}/>

        <div>My name is {name} </div>
        <div> I rendered {x} times</div>
        </>
    )
}