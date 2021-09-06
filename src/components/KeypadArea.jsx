import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DamageContext } from '../DamageContext';

const KeypadArea = () => {
  const keypadBtns = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '00',
    '000',
  ];

  const { damage, setDamage } = useContext(DamageContext);

  return (
    <>
      <div>
        <Button
          color='default'
          onClick={() => {
            setDamage('');
          }}
          variant='contained'
        >
          Clear
        </Button>

        <TextField
          onChange={(e) => {
            setDamage(e.target.value);
          }}
          type='number'
          value={damage}
          variant='filled'
        />

        <Button
          color='secondary'
          onClick={() => {
            setDamage(damage.slice(0, damage.length - 1), 10);
            console.log(damage);
          }}
          variant='contained'
        >
          Del
        </Button>
      </div>
      <br />
      <div>
        {keypadBtns.map((value, index) => {
          return (
            <>
              {index % 3 ? <span /> : <br />}
              <Button
                color='primary'
                key={index}
                onClick={() => setDamage(damage + value)}
                variant='contained'
              >
                {value}
              </Button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default KeypadArea;
