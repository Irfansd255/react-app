import React from 'react'

const Data = (props) => {
    console.log(props)

    const {pImg, pDate} = props.info;
  return (
    <div>
        <img src={pImg} alt="" />
    <h2>{pDate.toString()}</h2>
    </div>
  )
}

export default Data