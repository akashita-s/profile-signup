import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import EnterEmail from "../src/components/EnterEmail";
import EnterOTP from "../src/components/EnterOTP";
import { useSelector } from 'react-redux'
import Form from "../src/components/Form";
import Dashboard from "../src/components/Dashboard";
import NavigationBar from "../src/components/NavigationBar";

const Home: NextPage = () => {
 
  const currentStep = useSelector((state: any) => state.step.value.name)

  const Step = () => {
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
        <Form />
      </div>)
  
    else return (
      <div className={styles.container}>
        <Dashboard />
      </div>
  );

  
  }
  

  return(
    <div >
      <NavigationBar/>
      <Step />
    </div>
  )
  
};

export default Home;
