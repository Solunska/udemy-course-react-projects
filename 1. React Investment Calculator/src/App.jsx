import logo from './assets/investment-calculator-logo.png'
import Header from "./components/Header"
import Inputs from './components/Inputs'
import { useState } from 'react';
import Results from './components/Results';

function App() {

  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setuserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header
        image={logo}
        title="Investment Calculator"
      />
      <Inputs
        onChange={handleChange}
        userInput={userInput} />
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
