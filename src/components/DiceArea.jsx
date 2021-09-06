import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import Dice from 'react-dice-roll';
import { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

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
                setDiceCount([...diceCount, <Dice size='60' />]);
              }
            }}
            startIcon={<AddCircleIcon />}
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
            startIcon={<DeleteForeverIcon />}
            variant='contained'
          >
            Remove Dice
          </Button>
          <Button
            color='default'
            onClick={() => {
              setDiceCount([]);
            }}
            startIcon={<SettingsBackupRestoreIcon />}
            variant='contained'
          >
            Clear
          </Button>
        </ButtonGroup>
      </div>
      <br />
      <div>{diceCount.map((dice) => dice)}</div>
    </>
  );
};

export default DiceArea;
