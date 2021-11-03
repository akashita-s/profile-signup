import React from 'react'
import styles from '../../styles/Home.module.css'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector((state: any) => state.user.value)
    return (
        <div >
            <h1 className={styles.heading}>
                Profile Page
            </h1>
            
            <p>Full Name : {user.name}</p>
            <p>Contact Number : {user.number}</p>
            <p>E-mail : {user.email}</p>
        </div>
    )
}

export default Profile 
