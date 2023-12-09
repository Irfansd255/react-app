import React, { useContext } from 'react'
import CompB from './CompB'
import { AppContext } from '../contextApi/AppContext'

const CompA = (props) => {
    console.log(props)

    const {name}= useContext(AppContext)

  return (
    <div>
        <hr />
        <h1>Comp A</h1>
        <h2>{name}</h2>
        <hr />

        <CompB b={props.a}/>
    </div>
  )
}

export default CompA