import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input<{ hasIcon: boolean; width: string }>`
  width: ${({ width }: { width?: string }) => width || "100%"};
  padding: ${({ hasIcon }) => (hasIcon ? "10px 10px 10px 50px" : "10px")};
  border-radius: 24.5px;
  border: 1px solid #494a4c;
  font-size: 16px;
  outline: none;
  position: relative;

  &::placeholder {
    font-family: "e-Ukraine", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #8d8d8d;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 32px;
  height: 27px;
  z-index: 10;
  pointer-events: none;
`;
