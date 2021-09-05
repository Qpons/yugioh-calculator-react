import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DamageContext } from '../DamageContext';

const Player2Status = () => {
  const [p2Hp, setP2Hp] = useState(8000);
  const { damage } = useContext(DamageContext);

  return (
    <>
      <div>
        Player 2{' '}
        <Button color='primary' variant='contained'>
          First
        </Button>
      </div>
      <div>
        <TextField
          onChange={(e) => setP2Hp(e.target.value)}
          type='number'
          value={p2Hp}
          variant='filled'
        />
      </div>
      <div className='player1'>
        <Button
          color='secondary'
          onClick={() => setP2Hp(p2Hp - parseInt(damage, 10))}
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
          onClick={() => setP2Hp(p2Hp / 2)}
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

export default Player2Status;
