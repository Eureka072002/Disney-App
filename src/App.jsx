import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Production from './Components/Production'
import GenreMovieList from './Components/GenreMovieList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
        <Header/>
        <Slider/>
        <Production />
        <GenreMovieList/>
    </div>
  )
}

export default App