import { useState } from 'react';
import './App.css';
import { DamageContext } from './DamageContext';
import GameStatus from './components/GameStatus';
import Player1Status from './components/Player1Status';
import Player2Status from './components/Player2Status';
import KeypadArea from './components/KeypadArea';

function App() {
  const [damage, setDamage] = useState('');

  return (
    <div>
      <GameStatus />
      <div className='player-field p1'>
        <DamageContext.Provider value={{ damage, setDamage }}>
          <Player1Status />
        </DamageContext.Provider>
      </div>
      <div className='player-field p2'>
        <DamageContext.Provider value={{ damage, setDamage }}>
          <Player2Status />
        </DamageContext.Provider>
      </div>
      <div className='keypad-area'>
        <DamageContext.Provider value={{ damage, setDamage }}>
          <KeypadArea />
        </DamageContext.Provider>
      </div>
    </div>
  );
}

export default App;
