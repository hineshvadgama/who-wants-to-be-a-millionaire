import { useState } from 'react';
import IntroModal from './molecules/IntroModal/IntroModal.component';
import Game from './templates/Game/Game.component';

export default function App() {
  const [introModalIsOpen, setIntroModalOpen] = useState(true);

  return (
    <>
      <IntroModal isOpen={introModalIsOpen} setIsOpen={setIntroModalOpen} />
      <Game setIntroModalOpen={setIntroModalOpen} />
    </>
  );
}
