import * as styled from "./styled";
import searchIcon from '../../../styles/icons/search-icon.svg'

interface InputComponentProps {
    placeholder: string;
    width?: string;
    hasIcon?: boolean;
}

function InputComponent({placeholder, width, hasIcon = false}: InputComponentProps) {
  return (
    <styled.InputContainer>
    {hasIcon && <styled.Icon src={searchIcon} alt="Search Icon" />}
    <styled.Input 
      width={width!}
      type="text" 
      placeholder={placeholder} 
      hasIcon={hasIcon} 
    />
  </styled.InputContainer>
  );
}

export default InputComponent;
