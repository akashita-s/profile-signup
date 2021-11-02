import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from '../../styles/Home.module.css'
import {changeStep} from '../features/step'

function EnterEmail() {
    const [email, setEmail] = useState(" ")
    const dispatch = useDispatch()

    const onclicklink = (e: FormEvent<HTMLFormElement>) => {
        // var response = await fetch("https://hiring.getbasis.co/candidate/users/email", {
        //   method: "POST",
        //   body: {
        //     email: email,
        //   },
        // }).then(res => res.json());
    
        // if(response.success) {
        //   dispatch(changePageStep({value:"enterOtp"});
        // }
        // // router.push(link);
        e.preventDefault()
        dispatch(changeStep({name: "otp"}))
      };

    return (
        <div className={styles.container}>
        <form onSubmit={(e) => {onclicklink(e)}}>
          <h1>Enter Email: </h1>
          <input className={styles.input} type='email' placeholder="Enter a valid email" onChange={(e) => setEmail(e.target.value)}></input>
          <button
            className={styles.button}
            type="submit"
            onClick={() => {onclicklink}}
            // onClick={async () => await onclicklink("/otp")}
          >
            Send OTP
          </button>
      </form>
    </div>
    )
}

export default EnterEmail
