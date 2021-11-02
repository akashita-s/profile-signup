import { useRouter } from 'next/router';
import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import styles from '../../styles/Home.module.css'
import {changeStep} from '../features/step'

function EnterOTP() {
    const router = useRouter();
    const dispatch = useDispatch()
    const onclicklink = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        dispatch(changeStep({name: 'signup'}))
    }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => {onclicklink(e)}}>
       <h1>Enter Otp: </h1>
       <input className={styles.input} placeholder='Enter six digit number'></input>
       <div>
            <button className={styles.button} >Resend</button>
            <button className={styles.button} onClick={() => {onclicklink}}>Submit</button>
       </div>
       </form>
       
    </div>
  )
}

export default EnterOTP
