import { useState } from "react";

const masseges = ["learn React", "apply Jobs", "invest your new income"];

const stepPage = () => {
  const [step, setStep] = useState(0);
  const [isHidestate, setisHideState] = useState(true);

  const IncrementStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const HandlePrevStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };
  const toggleState = () => {
    setisHidestate(!isHidestate);
  };

  return (
    <div className="w-[500px] mx-auto">
      <div
        onClick={toggleState}
        className="w-[10px] h-[10px] rounded-full bg-blue-300"
      >
        <p>X</p>
      </div>
      {isHidestate && <div></div>}
    </div>
  );
};
