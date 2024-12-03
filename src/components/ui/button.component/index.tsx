import styled from "styled-components";

const FillButton = styled.button`
  padding: 10px 40px;
  font-size: 14px;
  border-radius: 33px;
  cursor: pointer;
  color: #fff;
  font-family: "e-Ukraine";
  border: none;
  width: 157px;
  background: linear-gradient(90deg, #c41a65 0%, #373737 100%);
`;


const OutlineButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 24.5px;
  cursor: pointer;
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

type ButtonVariant = "fill" | "outline";

interface ButtonComponentProps {
    variant?: ButtonVariant;
    children: React.ReactNode;
  }

function ButtonComponent({ variant = "fill", children }: ButtonComponentProps) {
  let ButtonType;

  switch (variant) {
    case "outline":
      ButtonType = OutlineButton;
      break;
    case "fill":
    default:
      ButtonType = FillButton;
      break;
  }

  return <ButtonType>{children}</ButtonType>;
}

export default ButtonComponent;
