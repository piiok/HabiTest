import { FC, useMemo } from 'react';
import steps from '@/constants/steps';
import Typography from '@/components/atoms/Typography';
import useSelector from '@/hooks/redux/useSelector';
import { ListStyled } from './Resume.styled';

type ItemProps = {
  label: string;
  value?: string;
  required?: boolean;
  warning?: boolean;
};
const Item: FC<ItemProps> = ({ label, value, required, warning }) => {
  const color = useMemo(() => {
    if (warning) return 'warning';
    return value ? 'primary' : 'gray';
  }, [value, warning]);
  return (
    <li>
      {required && (
        <Typography variant="body2" bold component="span" color="error">
          *
        </Typography>
      )}
      <Typography variant="body2" bold component="span" color={color}>
        {label}:
      </Typography>{' '}
      <Typography variant="body2" bold component="span" color={color}>
        {value || '-'}
      </Typography>
    </li>
  );
};

const Resume = () => {
  const {
    data,
    currentStep: { index },
  } = useSelector((store) => store.form);
  return (
    <ListStyled>
      {steps.map((step, i) => (
        <Item
          key={step.backName}
          label={step.title}
          value={data[step.backName] || undefined}
          required={step.required}
          warning={
            i < index && (!data[step.backName] || data[step.backName] === '')
          }
        />
      ))}
    </ListStyled>
  );
};

export default Resume;
