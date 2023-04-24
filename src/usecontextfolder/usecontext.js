import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'
import { ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()

export default function Ucontext(){
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


return (
    <>
        <ThemeContext.Provider value ={darkTheme}>
            <button onClick={toggleTheme}> toggle Theme</button>
            <FunctionContextComponent />
            <ClassContextComponent/>
        </ThemeContext.Provider>
    </>
)
}