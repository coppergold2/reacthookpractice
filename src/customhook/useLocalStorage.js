import { useState,useEffect } from 'react'

function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage(key,initialValue){
    const [value,setValue] = useState(() => {   
        return getSavedValue(key,initialValue)  //uses a function because only want to load JSON.parse the first time our componment loads
    })

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    }, [value])

    return [value, setValue]
}