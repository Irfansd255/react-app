import React from 'react'
import InputText from '../components/InputText'
import InputPassword from '../components/InputPassword'
import Button from '../components/Button'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <label htmlFor="">User Name</label>
        <InputText/>
        <label htmlFor="">Password</label>
        <InputPassword/>
        <Button/>
    </div>
  )
}

export default Login