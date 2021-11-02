import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import EnterEmail from "../src/components/EnterEmail";
import EnterOTP from "../src/components/EnterOTP";
import SignUp from "../src/components/SignUp";
import { useSelector } from 'react-redux'

const Home: NextPage = () => {
 
  const currentStep = useSelector((state) => state.step.value.name)
  
  if (currentStep == 'email')
  return (
    <div className={styles.container}>
      <EnterEmail />
    </div>
  );
  if (currentStep == 'otp')
  return (
    <div className={styles.container}>
      <EnterOTP />
    </div>
  );
  if (currentStep == 'signup')
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
  else return null
};

export default Home;
