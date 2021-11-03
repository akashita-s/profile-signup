import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../src/features/user"
import stepReducer from "../src/features/step"
import stepAgainReducer from "../src/features/stepagain"
import tokenReducer from '../src/features/token'
import emailReducer from '../src/features/email'

const store = configureStore({
  reducer: {
    user: userReducer,
    step: stepReducer,
    stepagain: stepAgainReducer,
    token : tokenReducer,
    email: emailReducer,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>)
}

export default MyApp
