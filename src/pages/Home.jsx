import React, { useContext } from 'react'
import { AppContext } from '../contextApi/AppContext'

const Home = () => {
    const {name, counter, setCounter} = useContext(AppContext)
  return (
    <div>
        <h1>Home Page</h1>

        <button onClick={()=>setCounter(counter - 1)}>Decrement</button>
        <h2>{name}</h2>
    </div>
  )
}

export default Home