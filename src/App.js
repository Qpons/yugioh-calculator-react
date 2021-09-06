import { useEffect, useState } from 'react';
import './App.css';
import { DamageContext } from './DamageContext';
import { GameOverContext } from './DamageContext';
import GameStatus from './components/GameStatus';
import Player1Status from './components/Player1Status';
import Player2Status from './components/Player2Status';
import KeypadArea from './components/KeypadArea';
import GameEndPopup from './components/GameEndPopup';
import Button from '@material-ui/core/Button';
import DiceArea from './components/DiceArea';
import CoinArea from './components/CoinArea';

function App() {
  const [damage, setDamage] = useState('');
  const [gameOver, setGameOver] = useState(0);
  const [matchProgress, setMatchProgress] = useState([]);

  // Check who wins after game 2 or game 3 if there is a tie up to game 2
  useEffect(() => {
    console.log(matchProgress.length);
    if (matchProgress.length === 3) {
      alert('Winner is ' + matchProgress[2]);
      setMatchProgress([]);
    } else if (matchProgress.length === 2) {
      if (matchProgress[0] === matchProgress[1]) {
        alert('Winner is ' + matchProgress[0]);
        setMatchProgress([]);
      }
    }
  }, [matchProgress.length]);

  return (
    <div>
      {/* Option to force restart otherwise game will restart when a player wins */}
      <Button
        color='primary'
        onClick={() => {
          setMatchProgress([]);
        }}
        variant='contained'
      >
        Restart
      </Button>

      {/* Tracks game progress */}
      <GameStatus matchStatus={matchProgress} />

      {/*Player 1 HP and HP modifiers*/}
      <div className='base p1'>
        <GameOverContext.Provider value={{ gameOver, setGameOver }}>
          <DamageContext.Provider value={{ damage, setDamage }}>
            <Player1Status newMatch={matchProgress.length} />
          </DamageContext.Provider>
        </GameOverContext.Provider>
      </div>

      {/*Player 2 HP and HP modifiers*/}
      <div className='base p2'>
        <GameOverContext.Provider value={{ gameOver, setGameOver }}>
          <DamageContext.Provider value={{ damage, setDamage }}>
            <Player2Status newMatch={matchProgress.length} />
          </DamageContext.Provider>
        </GameOverContext.Provider>
      </div>

      {/*Coin toss area*/}
      <div className='base coin-area'>
        <CoinArea />
      </div>

      {/*Keypad to set damage*/}
      <div className='base keypad-area'>
        <DamageContext.Provider value={{ damage, setDamage }}>
          <KeypadArea />
        </DamageContext.Provider>
      </div>

      {/*Dice roll area*/}
      <div className='base dice-area'>
        <DiceArea />
      </div>

      {/*Popup to confirm game end. Confirming will move on to next game.*/}
      <GameOverContext.Provider value={{ gameOver, setGameOver }}>
        <GameEndPopup
          onConfirm={(winner) =>
            setMatchProgress([...matchProgress, 'P' + winner])
          }
          trigger={gameOver}
        />
      </GameOverContext.Provider>
    </div>
  );
}

export default App;
