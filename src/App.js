import { useState } from 'react';
import './App.css';
import { DamageContext } from './DamageContext';
import { GameOverContext } from './DamageContext';
import GameStatus from './components/GameStatus';
import Player1Status from './components/Player1Status';
import Player2Status from './components/Player2Status';
import KeypadArea from './components/KeypadArea';
import GameEndPopup from './components/GameEndPopup';

function App() {
  const [damage, setDamage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  return (
    <div>
      <GameOverContext.Provider value={{ gameOver, setGameOver }}>
        <GameEndPopup trigger={gameOver}>
          <h3>Game End?</h3>
        </GameEndPopup>
      </GameOverContext.Provider>
      <GameStatus />
      <div className='player-field p1'>
        <GameOverContext.Provider value={{ gameOver, setGameOver }}>
          <DamageContext.Provider value={{ damage, setDamage }}>
            <Player1Status />
          </DamageContext.Provider>
        </GameOverContext.Provider>
      </div>
      <div className='player-field p2'>
        <GameOverContext.Provider value={{ gameOver, setGameOver }}>
          <DamageContext.Provider value={{ damage, setDamage }}>
            <Player2Status />
          </DamageContext.Provider>
        </GameOverContext.Provider>
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
