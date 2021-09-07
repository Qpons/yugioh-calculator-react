import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DamageContext, GameOverContext } from '../DamageContext';
import PropTypes from 'prop-types';

const PlayerStatus = ({ newMatch }) => {
  const [p1Hp, setP1Hp] = useState(8000);
  const [p2Hp, setP2Hp] = useState(8000);
  const { damage } = useContext(DamageContext);
  const { setGameOver } = useContext(GameOverContext);

  // When Player 1 HP is depleted, trigger game over popup with Player 2 as winner.
  if (p1Hp <= 0) {
    setGameOver(2);
    setP1Hp(1);
  } else if (p2Hp <= 0) {
    setGameOver(1);
    setP2Hp(1);
  }

  // Reset Player 1 HP when new game starts.
  useEffect(() => {
    setP1Hp(8000);
    setP1Hp(8000);
  }, [newMatch]);

  return (
    <>
      <div>
        Player 1{' '}
        <Button color='primary' variant='contained'>
          First
        </Button>
        <span style={{ marginLeft: 310 }}> Player 2 </span>
        <Button color='primary' variant='contained'>
          First
        </Button>
      </div>

      <div>
        <TextField
          onChange={(e) => setP1Hp(e.target.value)}
          type='number'
          value={p1Hp}
          variant='filled'
        />

        <TextField
          onChange={(e) => setP2Hp(e.target.value)}
          style={{ marginLeft: 300 }}
          type='number'
          value={p2Hp}
          variant='filled'
        />
      </div>

      <div className='player1'>
        <Button
          color='secondary'
          onClick={() => setP1Hp(p1Hp - parseInt(damage, 10))}
          variant='contained'
        >
          Damage
        </Button>

        <Button
          onClick={() => setP1Hp(p1Hp + parseInt(damage, 10))}
          style={{ background: 'green', color: 'white' }}
          variant='contained'
        >
          Heal
        </Button>

        <Button
          color='secondary'
          onClick={() => setP2Hp(p2Hp - parseInt(damage, 10))}
          style={{ marginLeft: 350 }}
          variant='contained'
        >
          Damage
        </Button>

        <Button
          onClick={() => setP2Hp(p2Hp + parseInt(damage, 10))}
          style={{ background: 'green', color: 'white' }}
          variant='contained'
        >
          Heal
        </Button>

        <br />

        <Button
          color='primary'
          onClick={() => setP1Hp(p1Hp / 2)}
          variant='contained'
        >
          1/2
        </Button>

        <Button color='default' onClick={() => setP1Hp(0)} variant='contained'>
          OTK
        </Button>

        <Button
          color='primary'
          onClick={() => setP2Hp(p2Hp / 2)}
          style={{ marginLeft: 383 }}
          variant='contained'
        >
          1/2
        </Button>

        <Button color='default' onClick={() => setP2Hp(0)} variant='contained'>
          OTK
        </Button>
      </div>
    </>
  );
};

PlayerStatus.propTypes = {
  newMatch: PropTypes.number.isRequired,
};

export default PlayerStatus;
