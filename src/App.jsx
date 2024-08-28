import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let counter=15
 let [counter,setCounter] =useState(15)

    const adder =()=> {
      if(counter>=20) {setCounter(counter=20)}
       else setCounter(counter+1)
    }
    const remover =()=> {
      if(counter<=1) {setCounter(counter =0)}
      else setCounter(counter-1)
    }
  return (
    <>
     <h1>Dev and React</h1>
     <h2>Counter:{counter}</h2>
     <button onClick={adder}>ADD Counter</button>
     <button onClick={remover}>REMOVE Counter</button>
    </>
  )
}

export default App
