import { Paper, Typography } from '@mui/material';

type MoneyLadderStepProps = {
  currencySymbol: string;
  value: number;
};

export default function MoneyLadderStep({ currencySymbol, value }: MoneyLadderStepProps) {
  return (
    <Paper>
      <Typography>
        {currencySymbol}
        {value}
      </Typography>
    </Paper>
  );
}
