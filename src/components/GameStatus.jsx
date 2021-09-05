import React, { useEffect, useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const GameStatus = ({ matchStatus }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { game: 'Game 1', turn: 'First: ', winner: 'Win: ' },
    { game: 'Game 2', turn: 'First: ', winner: 'Win: ' },
    { game: 'Game 3', turn: 'First: ', winner: 'Win: ' },
  ];

  useEffect(() => {
    setActiveStep(matchStatus.length);
  }, [matchStatus.length]);

  return (
    <Stepper activeStep={activeStep} alternativeLabel='true'>
      {steps.map((label, index) => (
        <Step>
          <StepLabel>
            {label.game}
            <br />
            {label.turn}
            {matchStatus[index]}
            <br />
            {label.winner}
            {matchStatus[index]}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default GameStatus;
