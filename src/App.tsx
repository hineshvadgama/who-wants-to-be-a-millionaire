import { useState } from 'react';
import IntroModal from './organisms/IntroModal/IntroModal.component';
import MoneyLadder from './organisms/MoneyLadder/MoneyLadder.compoent';
import Game from './templates/Game/Game.component';

export default function App() {
  const [showMoneyLadder] = useState(false);
  return (
    <>
      <IntroModal />
      {
        showMoneyLadder
        && (
        <MoneyLadder
          currencySymbol="£"
          values={[100, 200, 300, 1000, 100, 500]}
        />
        )
      }
      <Game />
    </>
  );
}
