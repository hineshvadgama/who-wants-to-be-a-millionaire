import { Paper, Typography } from '@mui/material';
import { orange, indigo } from '@mui/material/colors';

type MoneyLadderStepProps = {
  currencySymbol: string;
  value: number;
  highlight: boolean;
};

export default function MoneyLadderStep(
  { currencySymbol, value, highlight }: MoneyLadderStepProps,
) {
  return (
    <Paper sx={
      {
        backgroundColor: highlight ? orange[900] : indigo[900], color: orange[50], p: 1, m: 2,
      }
    }
    >
      <Typography>
        {currencySymbol}
        {value}
      </Typography>
    </Paper>
  );
}
