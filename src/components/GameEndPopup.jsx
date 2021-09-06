import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameOverContext } from '../DamageContext';
import './style.css';
import PropTypes from 'prop-types';

const GameEndPopup = ({ onConfirm, trigger }) => {
  const { setGameOver } = useContext(GameOverContext);

  return trigger ? (
    <div className='popup'>
      <h2>Player {trigger} Win?</h2>
      {/* If winner is confirmed. Then onConfirm will add the winner to the current match status and
      start the next game */}
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

      {/*If cancelled, players can go back and confirm game before proceeding */}
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

GameEndPopup.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  trigger: PropTypes.number.isRequired,
};

export default GameEndPopup;
