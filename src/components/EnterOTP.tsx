import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Home.module.css'
import {changeStep} from '../features/step'
import axios from 'axios';

function EnterOTP() {
    const router = useRouter();
    const [verificationCode, setVerificationCode] = useState('')
    const token = useSelector((state) => state.token.value)
    const email = useSelector((state) => state.email.value)
    const dispatch = useDispatch()
    const onclicklink = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(changeStep({name: 'signup'}))

      axios.put("https://hiring.getbasis.co/candidate/users/email/verify", 
      {
        "email":email,
        "token": token,
        "verificationCode": verificationCode
      } )
        .then(function (response) {
          
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => {onclicklink(e)}}>
       <h1>Enter Otp: </h1>
       <input className={styles.input} placeholder='Enter six digit number' onChange={(e) => setVerificationCode(e.target.value)}></input>
       <div>
            <button type='reset' className={styles.button} >Resend</button>
            <button  type='submit' className={styles.button} onClick={() => {onclicklink}}>Submit</button>
       </div>
       </form>
       
    </div>
  )
}

export default EnterOTP