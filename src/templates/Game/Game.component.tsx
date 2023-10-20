import { useReducer } from 'react';
import { Container } from '@mui/material';
import QuestionAnswer from '../../organisms/QuestionAnswer/QuestionAnswer.component';
import questions from '../../assets/data';
import { RoundContext, RoundDispatchContext } from '../../context/gameRound/gameRoundContex';
import roundReducer from '../../context/gameRound/gameRoundReducer';

const initialRound: number = 0;

export default function Game() {
  const [round, dispatch] = useReducer(roundReducer, initialRound);

  return (
    <RoundContext.Provider value={round}>
      <RoundDispatchContext.Provider value={dispatch}>
        <Container>
          <QuestionAnswer
            question={questions[round].question}
            answers={questions[round].answers}
          />
        </Container>
      </RoundDispatchContext.Provider>
    </RoundContext.Provider>
  );
}
