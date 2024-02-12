import React, { useEffect, useRef, useState } from "react";

const CheckoutStepper = ({ stepConfig = [] }) => {
  const [currentStep, setcurrentStep] = useState(1);
  const [isComplete, setisComplete] = useState(false);
  const stepRef = useRef([]);

  const [margins, setmargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  if (!stepConfig.length) {
    return <></>;
  }

  useEffect(() => {
    setmargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef.current]);

  /**
   * todo : HandleNext buttton functionality
   * @param()
   */

  const HandleNext = () => {
    setcurrentStep((prevStep) => {
      //   console.log(prevStep);
      if (prevStep === stepConfig.length) {
        setisComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  const ActiveComponent = stepConfig[currentStep - 1]?.Component;

  //   calculateProgressWidth
  const calculateProgressWidth = () => {
    return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
  };

  //   taking all refercence

  return (
    <>
      <div className="Stepper">
        {stepConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span style={{ fontSize: "50px" }}>&#x2713;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
      </div>

      <div
        className="progess-bar"
        style={{
          width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
          marginLeft: margins.marginLeft,
          marginRight: margins.marginRight,
        }}
      >
        <div
          className="progress"
          style={{ width: `${calculateProgressWidth()}%` }}
        ></div>
      </div>

      <div className="activecomponent">
        <ActiveComponent />
      </div>

      {!isComplete && (
        <div className="btnWrapper">
          <button className="btn" onClick={HandleNext}>
            {currentStep === stepConfig.length ? "Finish " : "Next"}
          </button>
        </div>
      )}
    </>
  );
};

export default CheckoutStepper;
