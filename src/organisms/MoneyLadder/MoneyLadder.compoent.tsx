import { Box } from '@mui/material';
import MoneyLadderStep from '../../molecules/MoneyLadderStep/MoneyLadderStep.component';
import Lifeline from '../../molecules/Lifeline/Lifeline.component';

type MoneyLadderProps = {
  currencySymbol: string;
  values: number[]
};

export default function MoneyLadder({ currencySymbol, values }: MoneyLadderProps) {
  values.sort((a: number, b: number): number => a - b);
  const uniqueValues = values.filter((value: number, index: number) => values
    .indexOf(value) === index);

  const createMoneyLadderSteps = (): React.ReactElement[] => {
    const moneyLadderSteps: React.ReactElement[] = [];
    uniqueValues.forEach((value: number) => {
      moneyLadderSteps.push(
        <MoneyLadderStep
          key={value}
          currencySymbol={currencySymbol}
          value={value}
        />,
      );
    });
    return moneyLadderSteps;
  };

  return (
    <Box>
      <Box>
        <Lifeline type="fiftyfifty" />
        <Lifeline type="flip" />
        <Lifeline type="audience" />
      </Box>
      {createMoneyLadderSteps()}
    </Box>
  );
}
