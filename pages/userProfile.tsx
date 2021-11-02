import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import Dashboard from '../src/components/Dashboard'
import Form from '../src/components/Form'

const UserProfile: NextPage = () => {

  const currentStepAgain = useSelector((state) => state.stepagain.value.name)
  
  return (
    (currentStepAgain == 'form') ? <Form /> : <Dashboard /> 
    
  )
}

export default UserProfile
