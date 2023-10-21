import { useReducer, useState } from 'react';
import { Container } from '@mui/material';
import QuestionAnswer from '../../organisms/QuestionAnswer/QuestionAnswer.component';
import MoneyLadder from '../../organisms/MoneyLadder/MoneyLadder.compoent';
import questions, { moneyLadderValues } from '../../assets/data';
import { RoundContext, RoundDispatchContext } from '../../context/gameRound/gameRoundContex';
import roundReducer from '../../context/gameRound/gameRoundReducer';

const initialRound: number = moneyLadderValues.length - 1;

export default function Game() {
  const [round, dispatch] = useReducer(roundReducer, initialRound);
  const [showMoneyLadder] = useState(true);

  return (
    <RoundContext.Provider value={round}>
      <RoundDispatchContext.Provider value={dispatch}>
        <Container>
          <QuestionAnswer
            question={questions[round].question}
            answers={questions[round].answers}
          />
          {
            showMoneyLadder
            && (
              <MoneyLadder
                currencySymbol="£"
                values={moneyLadderValues}
              />
            )
          }
        </Container>
      </RoundDispatchContext.Provider>
    </RoundContext.Provider>
  );
}
