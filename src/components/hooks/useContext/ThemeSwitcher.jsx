import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();


const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light");
  return (
    <div className='h-lvh flex flex-col items-center justify-center mt-6 '>
        <h2 className='text-5xl font-bold '>Theme Switcher </h2>
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Theme />
        </ThemeContext.Provider>
      
    </div>
  )
}

const Theme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    function handleChangeTheme(){
        if(theme === "light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
 return(
    <div className='flex flex-col items-center justify-center h-lvh'>
        <div className={`${theme === "light"? "bg-black": "bg-stone-50"} border border-black max-w-[700px] p-24 flex items-center justify-center`}>
            <button onClick={handleChangeTheme} className='border border-gray-900 bg-pink-200 px-4 py-2 '>Change Theme</button>
        </div>


    </div>

 )
}

export default ThemeSwitcher;
