import { useState } from 'react';
import IntroModal from './molecules/IntroModal/IntroModal.component';
import MoneyLadder from './organisms/MoneyLadder/MoneyLadder.compoent';
import Game from './templates/Game/Game.component';
import { moneyLadderValues } from './assets/data';

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
          values={moneyLadderValues}
        />
        )
      }
      <Game />
    </>
  );
}
