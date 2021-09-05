import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const GameStatus = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Game 1', 'Game 2', 'Game 3'];

  return (
    <Stepper activeStep={activeStep} alternativeLabel='true'>
      {steps.map((label) => (
        <Step>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default GameStatus;
