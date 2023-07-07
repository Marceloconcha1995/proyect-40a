import React, { useState} from 'react'
import './Form.css'
import { validation } from './validation.js'


export const Form = (props) => {

    const [user, setData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    function handleChange(event){

        setData({...user , [event.target.name]: event.target.value})

        setErrors(validation({
            ...user , [event.target.name]: event.target.value}))
    }


    function handleSubmit(event){
        event.preventDefault();

        props.login(user)
    
    }

  return (
    <div className='formulario'>

        <form onSubmit={handleSubmit}>  

            <h1>Log <strong style={{
                color: 'green'
            }} >i</strong>n</h1>

            <label>EMAIL</label>
            <input
            onChange={handleChange}
            name='email'
            value={user.email}
            type='text'
            className={errors.email && 'warning'}
            placeholder='ejemplo@gmail.com'
            ></input>
             <p className='danger'>{errors.email}</p>
         

            <label>PASSWORD</label>
            <input
            onChange={handleChange}
            name='password'
            value={user.password}
            type='password'
            className={errors.password && 'warning'}
            placeholder='123456'
            ></input>
             <p className='danger'>{errors.password}</p>
            
            <button
             type='submit'
            >Ingresar</button>

        </form>

    </div>
  )
}
