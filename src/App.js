import { useState, useEffect } from "react";

import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import DeskDarkBg from "./assets/bg-desktop-dark.jpg"
import DeskLightBg from "./assets/bg-desktop-light.jpg"
import MobDarkBg from "./assets/bg-mobile-dark.jpg"
import MobLightBg from "./assets/bg-mobile-light.jpg"

import Sun from "./assets/icon-sun.svg"
import Moon from "./assets/icon-moon.svg"

function App() {
  // THEMES
  const [isLight, setIsLight] = useState(false)

  const handleToggle = () => {
    setIsLight(!isLight)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    if (isLight) {
      body.classList.remove('dark')
      body.classList.add('light')
    } else {
      body.classList.add('dark')
      body.classList.remove('light')
    }
  }, [isLight])

  // ADDING THEMES TO LOCAL STORAGE
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem('themes'))
    if (storedTheme) setIsLight(storedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem('themes', JSON.stringify(isLight))
  }, [isLight])

  return (
    <div className="">
      <Header 
      setBackgroundDesk={isLight ? DeskLightBg : DeskDarkBg}
      setBackgroundMob={isLight ? MobLightBg : MobDarkBg}
      />
      <Section
      onClick={handleToggle}
      toggleIcon={isLight ? Moon : Sun}
      />
      <Footer />
    </div>
  );
}

export default App;
