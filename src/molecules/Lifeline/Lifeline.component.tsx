import { Groups, LooksTwo, Loop } from '@mui/icons-material';

type LifelineProps = {
  type: 'audience' | '5050' | 'flip';
};

export default function Lifeline({ type }: LifelineProps) {
  const returnIcon = (): React.ReactElement => {
    let icon: React.ReactElement;
    switch (type) {
      case 'audience':
        icon = <Groups />;
        break;
      case '5050':
        icon = <LooksTwo />;
        break;
      case 'flip':
        icon = <Loop />;
        break;
      default:
        icon = <Groups />;
    }
    return icon;
  };

  return returnIcon();
}
