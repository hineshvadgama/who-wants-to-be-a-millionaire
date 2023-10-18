import { Box } from '@mui/material';
import MoneyLadderStep from '../../molecules/MoneyLadderStep/MoneyLadderStep.component';
import Lifeline from '../../molecules/Lifeline/Lifeline.component';

export default function MoneyLadder() {
  return (
    <Box>
      <Box>
        <Lifeline type="5050" />
        <Lifeline type="flip" />
        <Lifeline type="audience" />
      </Box>
      <MoneyLadderStep currencySymbol="£" value={100} />
      <MoneyLadderStep currencySymbol="£" value={200} />
      <MoneyLadderStep currencySymbol="£" value={300} />
      <MoneyLadderStep currencySymbol="£" value={500} />
      <MoneyLadderStep currencySymbol="£" value={1000} />
      <MoneyLadderStep currencySymbol="£" value={2000} />
      <MoneyLadderStep currencySymbol="£" value={4000} />
      <MoneyLadderStep currencySymbol="£" value={8000} />
      <MoneyLadderStep currencySymbol="£" value={16000} />
      <MoneyLadderStep currencySymbol="£" value={32000} />
      <MoneyLadderStep currencySymbol="£" value={64000} />
      <MoneyLadderStep currencySymbol="£" value={125000} />
      <MoneyLadderStep currencySymbol="£" value={250000} />
      <MoneyLadderStep currencySymbol="£" value={500000} />
      <MoneyLadderStep currencySymbol="£" value={1000000} />
    </Box>
  );
}
