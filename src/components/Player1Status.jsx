import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DamageContext, GameOverContext } from '../DamageContext';

const Player1Status = ({ newMatch }) => {
  const [p1Hp, setP1Hp] = useState(8000);
  const { damage } = useContext(DamageContext);
  const { setGameOver } = useContext(GameOverContext);

  if (p1Hp <= 0) {
    setGameOver(2);
    setP1Hp(1);
  }

  useEffect(() => {
    setP1Hp(8000);
  }, [newMatch]);

  return (
    <>
      <div>
        Player 1{' '}
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
      </div>
    </>
  );
};

export default Player1Status;
