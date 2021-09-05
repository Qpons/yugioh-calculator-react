import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameOverContext } from '../DamageContext';

const GameEndPopup = ({ trigger }) => {
  const { setGameOver } = useContext(GameOverContext);

  return trigger ? (
    <div>
      <h2>Game Over?</h2>
      <Button
        color='primary'
        onClick={() => setGameOver(false)}
        variant='contained'
      >
        Confirm
      </Button>
      <Button
        color='secondary'
        onClick={() => setGameOver(false)}
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
