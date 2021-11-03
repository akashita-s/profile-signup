import React from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";

function SignUp() {

    const router = useRouter();
  const onclicklink = (link: string) => {
    router.push(link);
  };

    return (
        <div className={styles.container}>
            <h1>Not an existing user. Sign up?</h1>
            <button className={styles.button} onClick={() => onclicklink("/userProfile")}>Sign Up</button>
        </div>
    )
}

export default SignUp
