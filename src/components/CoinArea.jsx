import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';

const CoinArea = () => {
  const [coinStatus, setCoinStatus] = useState([]);

  const handleFlip = (index) => {
    let newColor = 'default';
    let newStatus = 'Flip';
    if (Math.random() > 0.5) {
      newColor = 'secondary';
      newStatus = 'Heads';
    } else {
      newColor = 'primary';
      newStatus = 'Tails';
    }
    const before = coinStatus.slice(0, index);
    const after = coinStatus.slice(index + 1);
    setCoinStatus([
      ...before,
      { color: newColor, status: newStatus },
      ...after,
    ]);
  };

  return (
    <>
      <div>
        <ButtonGroup>
          <Button
            color='primary'
            onClick={() => {
              if (coinStatus.length < 3) {
                setCoinStatus([
                  ...coinStatus,
                  { color: 'default', status: 'Flip' },
                ]);
              }
            }}
            variant='contained'
          >
            Add Coin
          </Button>
          <Button
            color='secondary'
            onClick={() => {
              if (coinStatus.length > 0) {
                setCoinStatus(coinStatus.slice(0, coinStatus.length - 1));
              }
            }}
            variant='contained'
          >
            Remove Coin
          </Button>
        </ButtonGroup>
      </div>
      <br />
      <div>
        {coinStatus.map((coin, index) => (
          <Button
            color={coin.color}
            onClick={() => handleFlip(index)}
            style={{ borderRadius: 50, height: 80, width: 80 }}
            variant='contained'
          >
            {coin.status}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CoinArea;
