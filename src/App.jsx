import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterFun from './CounterFun'
import CounterClass from './CounterClass'
import ToDoForm from './TodoForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{margin:"15px 0px", textAlign:"center"}}>Assignment-2 Counter Application</h1>
    <CounterFun />
    <CounterClass />
    </>
  )
}

export default App
