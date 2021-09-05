import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import Dice from 'react-dice-roll';
import { useState } from 'react';

const DiceArea = () => {
  const [diceCount, setDiceCount] = useState([]);

  return (
    <>
      <div>
        <ButtonGroup>
          <Button
            color='primary'
            onClick={() => {
              if (diceCount.length < 3) {
                setDiceCount([...diceCount, <Dice size='50' />]);
              }
            }}
            variant='contained'
          >
            Add Dice
          </Button>
          <Button
            color='secondary'
            onClick={() => {
              if (diceCount.length >= 0) {
                setDiceCount(diceCount.slice(0, diceCount.length - 1));
              }
            }}
            variant='contained'
          >
            Remove Dice
          </Button>
        </ButtonGroup>
      </div>
      <br />
      <div>{diceCount.map((dice) => dice)}</div>
    </>
  );
};

export default DiceArea;
