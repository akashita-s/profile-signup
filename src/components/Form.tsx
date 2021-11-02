import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user'
import {changeStepAgain} from "../features/stepagain"
import styles from '../../styles/Home.module.css'

function Form() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login({name: name, number: number, email: email, loggedIn: true}))
        dispatch(changeStepAgain({name: "dashboard"}))
    }

  return (
    <div className={styles.container}>
        <h3>Please sign in to continue</h3>
        <form onSubmit={(e) => {handleSubmit(e)}}>
        <div>
            <p>Enter Name: </p>
            <input className={styles.input} type='name' placeholder='Enter a valid name' onChange={(event) => {setName(event.target.value)}}></input>
        </div>
        <div>
            <p>Enter Number: </p>
            <input className={styles.input} type='number'  placeholder='Enter a valid number' onChange={(event) => {setNumber(event.target.value)}}></input>
        </div>
        <div>
            <p>Enter Email: </p>
            <input className={styles.input} type='email' placeholder='Enter a valid email' onChange={(event) => {setEmail(event.target.value)}}></input>
        </div>
       
       
        <button type='submit' className={styles.button} onClick={() => {handleSubmit}}>Sign In</button>
       
        </form>
    </div>
  )
}

export default Form
