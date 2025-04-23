import { useState, createContext } from "react";

export const ThemeContext=createContext();

const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('white');

    const toggleTheme=()=>{
        theme==='white'?setTheme('dark'):setTheme('white');
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
           {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};

