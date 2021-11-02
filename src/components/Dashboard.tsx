import React from 'react'
import Login from './Login'
import Profile from './Profile'
import styles from '../../styles/Home.module.css'

function Dashboard() {
    return (
        <div className={styles.container}>
        <Profile />
        <Login />
    </div>
    )
}

export default Dashboard
