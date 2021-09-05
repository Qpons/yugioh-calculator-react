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
  const [damageField, setDamageField] = useState('');
  const { damage, setDamage } = useContext(DamageContext);

  return (
    <>
      <div>
        <Button
          color='default'
          onClick={() => {
            setDamageField('');
            setDamage(0);
          }}
          variant='contained'
        >
          Clear
        </Button>
        <TextField
          onChange={(e) => {
            setDamageField(e.target.value);
            setDamage(parseInt(e.target.value, 10));
          }}
          type='number'
          value={damageField}
          variant='filled'
        />
        <Button
          color='secondary'
          onClick={() => {
            setDamageField(damageField.slice(0, damageField.length - 1));
            setDamage(
              parseInt(damageField.slice(0, damageField.length - 1), 10)
            );
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
                onClick={() => setDamageField(damageField + value)}
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
