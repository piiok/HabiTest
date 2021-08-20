import { FC } from 'react';
import Typography from '@/components/atoms/Typography';
import RootStyled, { Bar } from './ProgressiveBar.styles';

type Props = {
  total: number;
  completed: number;
};

const ProgressiveBar: FC<Props> = ({ total, completed }) => {
  const percent = completed / total;
  return (
    <RootStyled>
      <Bar percent={percent} />
      <Typography component="div" variant="overline" color="gray">
        {completed}/{total}
      </Typography>
    </RootStyled>
  );
};

export default ProgressiveBar;
