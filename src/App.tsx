import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState('ligth')

  useEffect(() => {
    return setTheme(localStorage.getItem('theme') ?? 'dark');
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == 'dark' ? 'bg-[#1e1e1e]' : null}`} >
        <Header />
        <Home />
      </ div>
    </ThemeContext.Provider>

  )
}