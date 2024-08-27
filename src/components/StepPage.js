import { useState } from "react";

const messages = ["learn React", "apply Jobs", "invest your new income"];

export const StepPage = () => {
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
    setisHideState(!isHidestate);
  };
  console.log(toggleState);

  return (
    <div className="w-[500px] mx-auto">
      <div
        onClick={toggleState}
        className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-blue-300 ml-auto "
      >
        <p>x</p>
      </div>
      {isHidestate && (
        <div>
          <div className={`flex justify-between  mt-10 mb-10`}>
            <div
              className={`flex justify-center items-center text-[white] w-10 h-10 rounded-full bg-gray-400 ${
                step >= 1 ? "bg-purple-500" : "bg-gray-500"
              } `}
            >
              1
            </div>
            <div
              className={`flex justify-center items-center text-[white] w-10 h-10 rounded-full bg-gray-400 ${
                step >= 2 ? "bg-purple-500" : "bg-gray-500"
              }`}
            >
              2
            </div>
            <div
              className={`flex justify-center items-center text-[white] w-10 h-10 rounded-full bg-gray-400 ${
                step >= 3 ? "bg-purple-500" : "bg-gray-500"
              }`}
            >
              3
            </div>
          </div>
          <p className="mb-10 text-center">{messages[step - 1]}</p>
          <div className="flex justify-between">
            <button
              onClick={HandlePrevStep}
              className="py-1 px-2 bg-blue-500 rounded-md text-[white] w-fit"
            >
              prev
            </button>
            <button
              onClick={IncrementStep}
              className="py-1 px-2 bg-blue-500 rounded-md text-[white] w-fit"
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
