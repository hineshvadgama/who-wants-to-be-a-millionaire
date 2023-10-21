import { useContext } from 'react';
import { Box } from '@mui/material';
import MoneyLadderStep from '../../molecules/MoneyLadderStep/MoneyLadderStep.component';
import Lifeline from '../../molecules/Lifeline/Lifeline.component';
import { RoundContext } from '../../context/gameRound/gameRoundContex';

type MoneyLadderProps = {
  currencySymbol: string;
  values: number[]
};

export default function MoneyLadder({ currencySymbol, values }: MoneyLadderProps) {
  const round = useContext(RoundContext);

  values.sort((a: number, b: number): number => b - a);
  const uniqueValues = values.filter((value: number, index: number) => values
    .indexOf(value) === index);

  return (
    <Box>
      <Box>
        <Lifeline type="fiftyfifty" />
        <Lifeline type="flip" />
        <Lifeline type="audience" />
      </Box>
      {uniqueValues.map((value, index) => (
        <MoneyLadderStep
          key={value}
          currencySymbol={currencySymbol}
          value={value}
          highlight={index === round}
        />
      ))}
    </Box>
  );
}
