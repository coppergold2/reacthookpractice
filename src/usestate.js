import React, { useState } from 'react';
function Ustate() {
  const [count,setCount] = useState(0)
  const [theme,setTheme] = useState('blue')

  function inc() {
    setCount(prevC => prevC +1 )
    setTheme('red')
  }
  function dec() {
    setCount(prevC => prevC -1)
    setTheme('green')
  }
  return (
    <>
    <button onClick= {dec}>-</button>
    <span>{count}{theme}</span>
    <button onClick={inc}>+</button>
    </>
  );
}

export default Ustate;
