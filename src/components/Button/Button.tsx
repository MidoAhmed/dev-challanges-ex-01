import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

interface ButtonStyledProps {
  variant?: "default" | "text" | "outline";
  disableShadow?: boolean;
  color?: "default" | "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = styled.button<ButtonStyledProps>`
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

/* s */

export default Button;
