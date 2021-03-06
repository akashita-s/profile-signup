import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from '../../styles/Home.module.css'
import {changeStep} from '../features/step'
import { changeToken } from '../features/token';
import { changeEmail } from '../features/email';
import axios from 'axios'

function EnterEmail() {
    const [email, setEmail] = useState(" ")
    const dispatch = useDispatch()

    const onclicklink = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      
      axios.post("https://hiring.getbasis.co/candidate/users/email", 
      {"email": email} )
        .then(function (response) {
          const tkn = response.data.results.token;
          console.log(tkn)
          dispatch(changeToken(tkn))
          dispatch(changeEmail(email))
          dispatch(changeStep({name: 'otp'})) 
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });

        
      };

    return (
        <div >
        <form className={styles.container} onSubmit={(e) => {onclicklink(e)}}>
          <h1>Enter Email: </h1>
          <input className={styles.input} autoFocus type='email' placeholder="Enter a valid email" onChange={(e) => setEmail(e.target.value)}></input>
          <button
            className={styles.button}
            type="submit"
          >
            Verify Email
          </button>
      </form>
    </div>
    )
}

export default EnterEmail
