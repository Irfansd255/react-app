import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>

        <CompC c={props.b}/>
    </div>
  )
}

export default CompB