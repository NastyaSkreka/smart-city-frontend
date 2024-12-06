import styled from "styled-components";
import BtnArrowIcon from "../../../styles/icons/btn-arr.svg";

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
  padding: 7px 18px;
  max-width: 233px;
  border-radius: 15px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #494a4c;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "e-Ukraine", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 122%;
  letter-spacing: -0.04em;
  color: #494a4c;

  img {
    font-size: 16px;
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

  return (
    <ButtonType>
      {children}
      {variant === "outline" && <img src={BtnArrowIcon} alt="btn-icon" />}
    </ButtonType>
  );
}

export default ButtonComponent;
