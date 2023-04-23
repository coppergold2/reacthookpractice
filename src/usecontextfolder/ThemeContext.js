import React, {useContext, useState} from 'react'

const ThemeContext = React.createContext()

export function ThemeProvider ({children}){

    const [darkTheme,setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


}