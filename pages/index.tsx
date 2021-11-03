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
    return <EnterEmail />
      
    if (currentStep == 'otp')
    return <EnterOTP />
       
    if (currentStep == 'signup')
    return <Form />
  
    else return (
        <Dashboard />
      
  );

  }
  
  return(
    <div >
      <NavigationBar/>
      <div className={styles.container}>
        <Step />
      </div>
    </div>
  )
  
};

export default Home;
