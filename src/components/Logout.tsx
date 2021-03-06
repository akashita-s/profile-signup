import React from 'react'
import {useDispatch} from "react-redux"
import {logout} from "../features/user"
import styles from '../../styles/Home.module.css'
import axios from 'axios'

function Logout() {

const dispatch = useDispatch()
const onClickButton = () => {
    // dispatch(logout())
    axios.delete('https://hiring.getbasis.co/candidate/users/logout/5f81f1448a2299e0fabd6bdf')
    .then(function (response) {
        alert(response.data.message);
    })
    .catch(function (error) {
        alert('Not authorized to perform this action');
    })
    .then(function () {
    });

}

return (
    <div> 
        <button className={styles.button} onClick={() => {onClickButton()}}> 
            Logout
        </button>
    </div>
)
}

export default Logout
