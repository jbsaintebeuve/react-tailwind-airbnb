import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header'
import PictureGrid from './PictureGrid'
import Body from './Body'

function App() {
  const [count, setCount] = useState(0)
  const [isFixed, setIsFixed] = useState(false)

  return (
    <div className={isFixed ? "fixed w-screen" : ""}>
      <Header />
      <div className='container mx-auto'>
        <PictureGrid />
        <Body setFixed={setIsFixed} />
      </div>
    </div>
  )
}

export default App
