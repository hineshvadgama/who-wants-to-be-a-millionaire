import {
  useEffect,
  useReducer,
  useState,
} from 'react';
import { Container } from '@mui/material';
import QuestionAnswer from '../../organisms/QuestionAnswer/QuestionAnswer.component';
import MoneyLadder from '../../organisms/MoneyLadder/MoneyLadder.compoent';
import questions, { moneyLadderValues } from '../../assets/data';
import { RoundContext, RoundDispatchContext } from '../../context/gameRound/gameRoundContex';
import roundReducer from '../../context/gameRound/gameRoundReducer';
import WinnerModal from '../../molecules/WinnerModal/WinnerModal';

type TGameProps = {
  setIntroModalOpen: (isOpen: boolean) => void
};

export default function Game({ setIntroModalOpen }: TGameProps) {
  const [round, dispatch] = useReducer(roundReducer, 0);
  const [showMoneyLadder] = useState<boolean>(true);
  const [showWinnerModal, setShowWinnerModal] = useState<boolean>(false);

  useEffect(() => {
    if (round === questions.length) {
      setShowWinnerModal(true);
    }
  }, [round]);

  const resetGame = (): void => {
    setShowWinnerModal(false);
    // reset rounds back to start
    dispatch({ type: 'reset', noOfRounds: questions.length });
    setIntroModalOpen(true);
  };

  const handleWinnerModalClose = (): void => {
    resetGame();
  };

  return (
    <RoundContext.Provider value={round}>
      <RoundDispatchContext.Provider value={dispatch}>
        <Container>
          {questions[round] && (
            <QuestionAnswer
              question={questions[round].question}
              answers={questions[round].answers}
            />
          )}
          {showMoneyLadder && (
            <MoneyLadder
              currencySymbol="£"
              steps={moneyLadderValues}
            />
          )}
          <WinnerModal showModal={showWinnerModal} handleClose={handleWinnerModalClose} />
        </Container>
      </RoundDispatchContext.Provider>
    </RoundContext.Provider>
  );
}
