import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Hello There</h1>
     <Card username = "Shuhbam" h2Text = "Hi How are you doing"/>
     <Card username = "Hey There" h2Text = "Hi How are you doing"/>
    </>
  )
}

export default App
