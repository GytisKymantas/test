import React, { ReactElement } from "react";
import styled from "styled-components";

export interface ButtonProps {
  onClick: () => void;
  children?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children, disabled } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: #aa00ff;
  box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
  border-radius: 8px;
  color: #ffffff;
  padding: 12px 24px;
  font-weight: 700;
  width: 100%;
`;
