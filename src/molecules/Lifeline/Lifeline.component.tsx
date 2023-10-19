import { Groups, LooksTwo, Loop } from '@mui/icons-material';

type LifelineProps = {
  type: 'audience' | 'fiftyfifty' | 'flip';
};

export default function Lifeline({ type }: LifelineProps) {
  const iconMap: {
    audience: React.ReactElement,
    fiftyfifty: React.ReactElement,
    flip: React.ReactElement,
  } = {
    audience: <Groups />,
    fiftyfifty: <LooksTwo />,
    flip: <Loop />,
  };

  return iconMap[type];
}
