import { useState } from 'react';
import IntroModal from './organisms/IntroModal/IntroModal.component';
import MoneyLadder from './organisms/MoneyLadder/MoneyLadder';
import Game from './templates/Game/Game.component';

export default function App() {
  const [showMoneyLadder] = useState(true);
  return (
    <>
      <IntroModal />
      {showMoneyLadder && <MoneyLadder />}
      <Game />
    </>
  );
}
