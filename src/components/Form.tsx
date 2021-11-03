import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/user'
import {changeStepAgain} from "../features/stepagain"
import styles from '../../styles/Home.module.css'
import axios from 'axios'

function Form() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const email = useSelector((state) => state.email.value)
    const token = useSelector((state) => state.token.value)
    const [referal, setReferal] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login({name: name, email: email, number: number}))
        dispatch(changeStepAgain({name: "dashboard"}))


        axios.post("https://hiring.getbasis.co/candidate/users", 
        {
          "firstName": name, 
          "email": email, 
          "referredCodeKey": referal,
          "agreeToPrivacyPolicy": true,
          "token": token,
          "source": "WEB_APP"
  } )
        .then(function (response) {
          console.log(response); 
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });

    }

  return (
    <div className={styles.container}>
        <h3>Please sign up to continue</h3>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <div>
                <p>Enter Name: </p>
                <input className={styles.input} type='name' autoFocus placeholder='Enter a valid name' required onChange={(event) => {setName(event.target.value)}}></input>
            </div>
            <div>
                <p>Enter Number: </p>
                <input className={styles.input} type='number' placeholder='Enter a valid number' onChange={(event) => {setNumber(event.target.value)}}></input>
            </div>
            <div>
                <p>Enter Email: </p>
                <input className={styles.input} type='email' disabled placeholder={email} ></input>
            </div>
            <div>
                <p>Referal Code: </p>
                <input className={styles.input} type='text' placeholder='Optional' onChange={(event) => {setReferal(event.target.value)}}></input>
            </div>
        
            <div className={styles.subcontainer}>
                <input className={styles.checkbox} type="checkbox" required />
                <p>Agree to privacy policy?</p>
            </div>
            <button type='submit' className={styles.button} onClick={() => {handleSubmit}}>Sign Up</button>
       
        </form>
    </div>
  )
}

export default Form
