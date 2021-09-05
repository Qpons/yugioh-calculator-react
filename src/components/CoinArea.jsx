import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';

const CoinArea = () => {
  return (
    <div>
      <ButtonGroup>
        <Button color='primary' variant='contained'>
          Add Coin
        </Button>
        <Button color='secondary' variant='contained'>
          Remove Coin
        </Button>
        <Button color='default' variant='contained'>
          Flip Coin(s)
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CoinArea;
