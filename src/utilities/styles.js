import { css } from 'styled-components'

export const border = {
  color: '#E2E3DF',
  radius: '2px',
}

export const color = {
  white: '#FFFFFF',
  gold: '#fdf15c',
  grey: {
    extraLight: '#DDD',
    light: '#787878',
    main: '#454545',
    transparent: '#454545BB',
  },
  blue: {
    main: '#B6C4CC',
    dark: '#475b66',
  },
  black: {
    main: '#000000',
    alt: '#222',
  },
  teal: {
    main: '#8ce6de',
    dark: '#68b5ae',
    transparent: '#68b5aeBB',
  },
  golder: {
    main: '#f7e580',
  },
}

export const screen = {
  small: '600px',
  smallUp: '601px',
  medium: '900px',
  mediumUp: '901px',
  large: '1200px',
  largeUp: '1201px',
}

export const media = {
  smallAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.small}) {
      ${css(...args)};
    }
  `,
  mediumOnly: (...args) => css`
    @media only screen and (min-width: ${screen.smallUp}) and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndUp: (...args) => css`
    @media only screen and (min-width: ${screen.smallUp}) {
      ${css(...args)};
    }
  `,
  largeAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.large}) {
      ${css(...args)};
    }
  `,
  largeAndUp: (...args) => css`
    @media only screen and (min-width: ${screen.mediumUp}) {
      ${css(...args)};
    }
  `,
}
