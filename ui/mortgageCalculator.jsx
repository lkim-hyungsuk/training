// https://www.greatfrontend.com/questions/user-interface/mortgage-calculator

import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  return <Widget />;
}

/**
 * Helper function
 * @returns {Boolean}
 */
function canCalculate(result) {
  return result.loanAmount && result.interestRate && result.loanTerm;
}

/**
 * Helper function
 * @returns {Number}
 */
function calculate(result) {
  let { loanAmount, interestRate, loanTerm } = result;
  // loanAmount = parseFloat(loanAmount);
  // interestRate = parseFloat(interestRate);
  // loanTerm = parseFloat(loanTerm);

  // const monthlyPayment = loanAmount * ((interestRate * Math.pow((1 + interestRate), loanTerm)) / (Math.pow((1 + interestRate), loanTerm) - 1));
  // return monthlyPayment.toFixed(2);

  loanAmount = parseFloat(loanAmount);
  interestRate = parseFloat(interestRate) / 12 / 100; // Convert to monthly and percentage
  loanTerm = parseFloat(loanTerm) * 12; // Convert years to months

  if (interestRate === 0) {
    // Special case for 0% interest
    return (loanAmount / loanTerm).toFixed(2);
  }

  const monthlyPayment =
    loanAmount * (interestRate / (1 - Math.pow(1 + interestRate, -loanTerm)));
  return monthlyPayment.toFixed(2);
}

function Widget() {
  const [input, setInput] = useState({
    loanAmount: null,
    interestRate: null,
    loanTerm: null,
  });
  const [result, setResult] = useState(0);
  const [isError, setIsError] = useState(false);

  // helper function
  const handleChange = function (event) {
    const { id, value } = event.target;
    setInput({
      ...input,
      [id]: value,
    });
  };

  useEffect(() => {
    if (canCalculate(input)) {
      setIsError(false);
      setResult(calculate(input));
    } else {
      setIsError(true);
    }
  }, [
    /*Object.values(input)*/ input.loanAmount,
    input.interestRate,
    input.loanTerm,
  ]);

  return (
    <>
      <form>
        <div>
          <label htmlFor="loanAmount">Loan amount: </label>
          <input
            onChange={handleChange}
            id="loanAmount"
            type="text"
            name="loanAmount"
          />
        </div>
        <div>
          <label htmlFor="interestRate">Annual interest rate: </label>
          <input
            onChange={handleChange}
            id="interestRate"
            type="text"
            name="interestRate"
          />
        </div>
        <div>
          <label htmlFor="loanTerm">Loan term (in yrs): </label>
          <input
            onChange={handleChange}
            id="loanTerm"
            type="text"
            name="loanTerm"
          />
        </div>
      </form>
      <br />
      <div>Result: {result}</div>
      {isError && " There is an error"}
    </>
  );
}
