import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
    console.log(prefersDarkMode);
    return prefersDarkMode;
}

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
    const [searchTerm, setSearchTerm] = useState("panda")

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme);
        const body = document.querySelector('body')
        body.classList.toggle('dark-theme', newDarkTheme)
        console.log(body)
        /* 
        ### Alternative for select body

        const body = document.classList.toggle('dark-theme', newDarkTheme)
        */
    }

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme)
    }, [])
    
    return <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);