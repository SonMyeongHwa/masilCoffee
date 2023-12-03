import { css } from 'styled-components';

export const breakpoint = {
  large: '1023px',
  medium: "767px",
};

export const media = {
  medium: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.medium}) and (max-width: ${breakpoint.large}) {
        ${css(...args)}
      }
    `,
  large: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.large}) {
        ${css(...args)}
      }
    `,
};