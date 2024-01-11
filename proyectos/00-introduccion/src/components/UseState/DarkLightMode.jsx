import { useState } from "react"


const DarkLightMode = () => {
    const [darkMode, setDarkMode] = useState(false)
  return (
    <>
        <div className={`default ${darkMode ? "dark" : "light"}`}>
            <h1>Cambio de color</h1>
            <button onClick={toggleTheme}>{darkMode ? "Modo claro" : "Modo oscuro"}</button>
        </div>
    </>
  )
}

export default DarkLightMode