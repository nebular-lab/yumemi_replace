import { FC } from 'react';
import RadioButton from '../RadioButton';

type RadioButtonGroupProps = {
  labels: string[];
  selectedLabelIndex: number;
  setSelectedLabelIndex: (index: number) => void;
};
const RadioButtonGroup: FC<RadioButtonGroupProps> = (props) => {
  const { labels, selectedLabelIndex, setSelectedLabelIndex } = props;

  return (
    <div>
      {labels.map((label, index) => (
        <RadioButton
          key={label}
          id={label}
          value={label}
          checked={index === selectedLabelIndex}
          onChange={() => setSelectedLabelIndex(index)}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
