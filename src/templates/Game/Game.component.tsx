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

export default function Game() {
  const [round, dispatch] = useReducer(roundReducer, 0);
  const [showMoneyLadder] = useState<boolean>(true);
  const [showWinnerModal, setShowWinnerModal] = useState<boolean>(false);

  useEffect(() => {
    if (round < 0) {
      // setShowWinnerModal(true);
    }
  }, [round]);

  const handleWinnerModalClose = (): void => {
    setShowWinnerModal(false);
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
