import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/slices/counterSlice';

const ButtonIN = () => {

  const dispatch = useDispatch();


  return (
    <div>
        <button onClick={()=>dispatch(increment())}>INCREMENT</button>
    </div>
  )
}

export default ButtonIN