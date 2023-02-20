import React, { ReactNode } from 'react';
import { css } from '@emotion/css';
import { blue, darkgrey, grey, red, white, yellow } from '@/utils/colors';

type ButtonType = {
  type: 'primary' | 'secondary' | 'warning' | 'danger';
  disabled?: boolean;
};

interface ButtonProps extends ButtonType {
  children?: ReactNode | string | null;
  dataTestId: string;
  label?: string;
  onClick: () => void;
}

const styButtonType = {
  primary: `background-color: ${blue}; color: ${white}; border: 1px solid transparent;`,
  secondary: `background-color: ${white}; color: ${darkgrey}; border: 1px solid transparent;`,
  warning: `background-color: ${yellow}; color: ${white}; border: 1px solid transparent;`,
  danger: `background-color: ${red}; color: ${white}; border: 1px solid transparent;`,
};

const styButton = ({ disabled, type }: ButtonType) => css`
  outline: none;
  position: relative;
  display: inline-block;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  line-height: 1.5;
  border-radius: 8px;
  padding: 8px;
  width: 100%;

  ${styButtonType[type]}
  ${disabled
    ? `background-color: ${white}; color: ${grey}; border: 1px solid ${grey};`
    : ''}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  dataTestId,
  disabled,
  label,
  onClick,
  type,
}) => {
  return (
    <button
      className={styButton({ type, disabled })}
      data-testid={dataTestId}
      onClick={onClick}
      disabled={disabled}
    >
      {label && <span>{label}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
