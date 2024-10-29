import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [cont, setCount] = useState(0);
  const [theme, setTheme] = useState('ligth')

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212]' : null} h-[100vh]`} >
        <Header />
        <Home />
      </ div>
    </ThemeContext.Provider>

  )
}