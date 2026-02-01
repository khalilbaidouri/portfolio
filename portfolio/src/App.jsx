import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider } from './context/ThemeContext'

const  App = () => {
  return (
    <ThemeProvider>
      <div className='scroll-smooth dark:bg-zinc-950 dark:text-zinc-100 min-h-screen transition-colors duration-300' >
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default  App