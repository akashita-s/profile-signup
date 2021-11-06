import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { changeStep } from "../features/step";
import axios from "axios";
import { login } from "../features/user";

function EnterOTP() {
  const [verificationCode, setVerificationCode] = useState("");
  const token = useSelector((state: any) => state.token.value);
  const email = useSelector((state: any) => state.email.value);
  const dispatch = useDispatch();
  const onclicklink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .put("https://hiring.getbasis.co/candidate/users/email/verify", {
        email: email,
        token: token,
        verificationCode: verificationCode,
      })
      .then(function (response) {
        const success = response.data.success;

        if (success == true) {
          const check = response.data.results.isLogin;

          if (check == true) {
            dispatch(
              login({
                name: response.data.results.user.firstName,
                email: email,
                number: response.data.results.user.phoneNumber,
              })
            );
            dispatch(changeStep({ name: "dashboard" }));
          } else dispatch(changeStep({ name: "signup" }));
        } else {
          const count = response.data.messageObj.wrongEmailTokenCount;
          const message = response.data.message;
          alert(message);

          if (count > 2) {
            dispatch(changeStep({ name: "email" }));
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const onResend = () => {
    console.log("hi");
    axios
      .put("https://hiring.getbasis.co/candidate/users/token/resendtoken", {
        "email":email,
        "token": "1636185974052"
      })
      .then(function (response) {
        alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          onclicklink(e);
        }}
      >
        <h1>Enter Otp: </h1>
        <input
          className={styles.input}
          autoFocus
          placeholder="Enter six digit number"
          type="number"
          onChange={(e) => setVerificationCode(e.target.value)}
        ></input>
        <p
          className={styles.link}
          onClick={() => {
            onResend();
          }}
        >
          Resend Token
        </p>
        <button
          type="submit"
          className={styles.button}
          onClick={() => {
            onclicklink;
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EnterOTP;
