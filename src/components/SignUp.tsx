import React from 'react'
import styles from '../../styles/Home.module.css'

function SignUp() {
    return (
        <div className={styles.container}>
            <h1>Not an existing user. Sign up?</h1>
            <button className={styles.button}>Sign Up</button>
        </div>
    )
}

export default SignUp
