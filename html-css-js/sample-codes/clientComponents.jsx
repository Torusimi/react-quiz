'use client'

import {useContext, createContext, useState, useEffect} from 'react';
import './App.css'

export default function ThemeToggle(){
  const [isDark, setIsDark] = useState(false)

  useEffect(() =>{
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme ==='dark')
  },[])

  const toggleTheme = () =>{
    const newTheme = !isDark ? 'dark' : 'light'
    setIsDark(!isDark)
    localStorage.setItem('theme',newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return(
    <button onClick={toggleTheme}>
      {isDark ? 'ライトモード' : 'ダークモード'}
    </button>
  )
}

