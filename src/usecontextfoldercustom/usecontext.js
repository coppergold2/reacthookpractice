import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export default function Ucontextcustom(){
    return (
        <ThemeProvider>
            <FunctionContextComponent/>
        </ThemeProvider>
    )
}
