import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

interface ButtonStyledProps {
  variant?: "default" | "text" | "outline";
  disableShadow?: boolean;
  color?: "default" | "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    PropsWithChildren<ButtonStyledProps> {
  as?: React.ElementType;
}

const StyledButton = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  font-family: Noto Sans JP;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 6px;
  cursor: pointer;

  padding: ${({ size }) => {
    switch (size) {
      case "sm":
        return "6px 12px";
        break;

      case "md":
        return "8px 16px";
        break;

      case "lg":
        return "11px 22px";
        break;

      default:
        return "8px 16px";
    }
  }};

  box-shadow: ${({ disableShadow }) =>
    disableShadow ? "none" : "0px 2px 3px 0px rgba(51, 51, 51, 0.2)"};

  ${({ variant, color }) => {
    switch (variant) {
      case "outline":
        return css`
          background-color: transparent;
          border: 1px solid #3d5afe;
          color: #3d5afe;
          &:hover:not([disabled]),
          &:focus:not([disabled]) {
            background-color: rgba(41, 98, 255, 0.1);
          }
        `;
        break;

      case "text":
        return css`
          background: none;
          border: none;
          color: #3d5afe;
          box-shadow: none;
          &:hover:not([disabled]),
          &:focus:not([disabled]) {
            background-color: rgba(41, 98, 255, 0.1);
          }
        `;
        break;

      default:
        switch (color) {
          case "default":
            return css`
              background-color: #e0e0e0;
              border: 1px solid #e0e0e0;
              color: #3f3f3f;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #aeaeae;
              }
            `;
            break;
          case "primary":
            return css`
              background-color: #2962ff;
              border: 1px solid #2962ff;
              color: #fff;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #0039cb;
              }
            `;
            break;
          case "secondary":
            return css`
              background-color: #455a64;
              border: 1px solid #455a64;
              color: #fff;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #1c313a;
              }
            `;
            break;
          case "danger":
            return css`
              background-color: #d32f2f;
              border: 1px solid #d32f2f;
              color: #fff;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #9a0007;
              }
            `;
            break;
          default:
            return css`
              background-color: #e0e0e0;
              border: 1px solid #e0e0e0;
              color: #3f3f3f;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #aeaeae;
              }
            `;
        }

        break;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #e0e0e0;
      cursor: not-allowed;
      color: #9e9e9e;
      border: 1px solid #e0e0e0;
    `}
`;

/**
 * Button UI component for user interaction
 *
 * @param {ButtonProps} props
 * @returns {React.ReactElement}
 * @constructor
 * @see https://storybook.js.org/docs/react/writing-stories/introduction
 * @example
 * import { Button } from 'components/Button';
 *
 * export const Primary = () => <Button variant="primary">Primary</Button>;
 *
 * export const Secondary = () => <Button variant="secondary">Secondary</Button>;
 *
 * export const Danger = () => <Button variant="danger">Danger</Button>;
 *
 * export const Success = () => <Button variant="success">Success</Button>;
 *
 * export const Warning = () => <Button variant="warning">Warning</Button>;
 *
 * export const Info = () => <Button variant="info">Info</Button>;
 *
 * export const Light = () => <Button variant="light">Light</Button>;
 *
 * export const Dark = () => <Button variant="dark">Dark</Button>;
 *
 * export const Link = () => <Button variant="link">Link</Button>;
 *
 * export const OutlinePrimary = () => <Button variant="outline-primary">Outline Primary</Button>;
 *
 * export const OutlineSecondary = () => <Button variant="outline-secondary">Outline Secondary</Button>;
 *
 * export const OutlineDanger = () => <Button variant="outline-danger">Outline Danger</Button>;
 *
 * export const OutlineSuccess = () => <Button variant="outline-success">Outline Success</Button>;
 *
 * export const OutlineWarning = () => <Button variant="outline-warning">Outline Warning</Button>;
 *
 * export const OutlineInfo = () => <Button variant="outline-info">Outline Info</Button>;
 *
 * export const OutlineLight = () => <Button variant="outline-light">Outline Light</Button>;
 *
 * export const OutlineDark = () => <Button variant="outline-dark">Outline Dark</Button>;
 *
 * export const OutlineLink = () => <Button variant="outline-link">Outline Link</Button>;
 *
 * export const TextPrimary = () => <Button variant="text-primary">Text Primary</Button>;
 *
 * export const TextSecondary = () => <Button variant="text-secondary">Text Secondary</Button>;
 *
 *  export const TextDanger = () => <Button variant="text-danger">Text Danger</Button>;
 *
 * export const TextSuccess = () => <Button variant="text-success">Text Success</Button>;
 *
 * export const TextWarning = () => <Button variant="text-warning">Text Warning</Button>;
 *
 * export const TextInfo = () => <Button variant="text-info">Text Info</Button>;
 *
 * export const TextLight = () => <Button variant="text-light">Text Light</Button>;
 *
 * export const TextDark = () => <Button variant="text-dark">Text Dark</Button>;
 *
 * export const TextLink = () => <Button variant="text-link">Text Link</Button>;
 *
 * export const Disabled = () => <Button variant="primary" disabled>Disabled</Button>;
 *
 * export const Sizes = () => (
 *  <>
 *   <Button variant="primary" size="sm">Small</Button>
 *  <Button variant="primary" size="md">Medium</Button>
 * <Button variant="primary" size="lg">Large</Button>
 * </>
 * );
 *
 *
 * export const WithIcon = () => (
 * <>
 *  <Button variant="primary" startIcon={<span className="material-icons">face</span>}>Start Icon</Button>
 * <Button variant="primary" endIcon={<span className="material-icons">face</span>}>End Icon</Button>
 * </>
 * );
 *
 * export const DisableShadow = () => <Button variant="primary" disableShadow>Disable Shadow</Button>;
 *
 */
const Button: React.FC<ButtonProps> = ({
  variant = "default",
  color = "default",
  size = "md",
  disableShadow = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      disableShadow={disableShadow}
      color={color}
      size={size}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </StyledButton>
  );
};

export default Button;
