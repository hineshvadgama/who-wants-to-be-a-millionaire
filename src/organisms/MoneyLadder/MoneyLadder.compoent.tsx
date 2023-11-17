import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MoneyLadderStep from '../../molecules/MoneyLadderStep/MoneyLadderStep.component';
import Lifeline from '../../molecules/Lifeline/Lifeline.component';
import { RoundContext } from '../../context/gameRound/gameRoundContex';

type MoneyLadderProps = {
  currencySymbol: string;
  steps: number[]
};

export default function MoneyLadder({ currencySymbol, steps }: MoneyLadderProps) {
  steps.sort((a: number, b: number): number => b - a);

  const uniqueSteps = steps.filter((value: number, index: number) => steps
    .indexOf(value) === index);

  const round = useContext(RoundContext);
  const [stepTracker, setStepTracker] = useState<number>(uniqueSteps.length);

  useEffect(() => {
    setStepTracker(stepTracker - 1);
    if (stepTracker === 0) setStepTracker(uniqueSteps.length);
  }, [round]);

  return (
    <Box>
      <Box>
        <Lifeline type="fiftyfifty" />
        <Lifeline type="flip" />
        <Lifeline type="audience" />
      </Box>
      {uniqueSteps.map((value, index) => (
        <MoneyLadderStep
          key={value}
          currencySymbol={currencySymbol}
          value={value}
          highlight={index === stepTracker}
        />
      ))}
    </Box>
  );
}
