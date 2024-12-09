import styled from "styled-components";
import BtnArrowIcon from "../../../styles/icons/btn-arr.svg";

const FillButton = styled.button`
  padding: 10px 40px;
  font-size: 14px;
  border-radius: 33px;
  cursor: pointer;
  color: var(--background-color);
  font-family: "e-Ukraine";
  border: none;
  width: 157px;
  transition: background 0.3s ease, transform 0.3s ease;
  background: linear-gradient(90deg, #c41a65 0%, #373737 100%);

  &:hover {
    background: linear-gradient(90deg, #f56a8d 0%, #585858 100%);
    transform: scale(1.05);
  }
`;

const OutlineButton = styled.button`
  padding: 7px 18px;
  max-width: 233px;
  border-radius: 17px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "e-Ukraine", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 122%;
  letter-spacing: -0.04em;
  color: var(--border-color);
  transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  img {
    font-size: 16px;
  }

  &:hover {
    border-color: var(--pink-decor-color);
    color: var(--pink-decor-color);
    transform: scale(1.05);
  }

  &:hover img {
    filter: invert(39%) sepia(55%) saturate(394%) hue-rotate(305deg)
      brightness(94%) contrast(94%);
  }

  @media (max-width: 744px) {
    font-weight: 300;
    font-size: 12px;
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
