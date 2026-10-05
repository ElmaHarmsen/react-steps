import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  // State > useState(default value)
  // destructure the array with X, setX
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test] = useState({ name: "Jonas"})

  function handlePrevious() {
    // Convention: use a callback function with state variable as parameter - when updating state based on the current value of the state - otherwise you can pass in the new state value but it's safer using a callback function
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
      // setStep((curStep) => curStep + 1);
    }

    // BAD PRACTICE - don't mutate state like this:
    // test.name = "Fred";
    // INSTEAD use the state setter function:
    // useTest({ name: "Fred"})
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {/* using the child prop */}
      {children}
    </button>
  );
}
