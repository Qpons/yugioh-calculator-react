import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameOverContext } from '../DamageContext';
import './style.css';

const GameEndPopup = ({ onConfirm, trigger }) => {
  const { setGameOver } = useContext(GameOverContext);

  return trigger ? (
    <div className='popup'>
      <h2>Player {trigger} Win?</h2>
      <Button
        color='primary'
        onClick={() => {
          onConfirm(trigger);
          setGameOver(0);
        }}
        variant='contained'
      >
        Confirm
      </Button>
      <Button
        color='secondary'
        onClick={() => {
          setGameOver(0);
        }}
        variant='contained'
      >
        Cancel
      </Button>
    </div>
  ) : (
    ''
  );
};

export default GameEndPopup;
