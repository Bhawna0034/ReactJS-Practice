import React, { createContext, use } from 'react'

const ThemeContext = createContext();
const UseExample = () => {
  return (
    <div>
       <ThemeContext.Provider value="light">
        <ThemeComponent />
       </ThemeContext.Provider>
    </div>
  )
}

const ThemeComponent = () => {
    const theme = use(ThemeContext);
    return(
        <div>
            Current Theme: {theme}
        </div>
    )
}

export default UseExample
