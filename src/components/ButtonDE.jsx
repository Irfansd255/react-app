import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../redux/slices/counterSlice'

const ButtonDE = () => {

  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  )
}

export default ButtonDE