import React from 'react'
import {useDispatch} from "react-redux"
import {login} from "../features/user"
import styles from '../../styles/Home.module.css'

function Login() {

    const dispatch = useDispatch()
    return (
        <div> 
            <button className={styles.button} onClick={() => {dispatch(login({ name: " Can ", number: 7776666, email: " hi@gmail.com " }))}}> 
                Login
            </button>
        </div>
    )
}

export default Login
