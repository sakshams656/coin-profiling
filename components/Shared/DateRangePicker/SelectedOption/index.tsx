import * as styles from "./styles";

interface SelectedOptionProps {
  isOpen?: string;
  option: string;
}

const SelectedOption: React.FC<SelectedOptionProps> = ({ isOpen, option }) => (
  <span css={[styles.selectedOption, isOpen && styles.selectedOptionOpened]}>
    {option}
  </span>
);

export default SelectedOption;
