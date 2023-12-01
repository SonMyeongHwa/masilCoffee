import { css } from 'styled-components';

export const breakpoint = {
  large: '1023px',
  medium: "768px",
};

export const media = {
  medium: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.medium}) and (max-width: ${breakpoint.large}) {
        ${css(...args)}
      }
    `,
  mini: (...args) =>
    css`
      @media screen and (max-width: ${breakpoint.medium}) {
        ${css(...args)}
      }
    `,
};