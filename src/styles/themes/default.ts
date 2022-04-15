import { css } from "styled-components";

import { convertToRem } from "@utils/convertToRem";

export default {
  colors: {
    primary: {
      Primary50: '#EBE9FE',
      Primary100: '#DEDBFD',
      Primary200: '#BEB7FB',
      Primary300: '#9C92F8',
      Primary400: '#7B6EF6',
      Primary500: '#5A4AF4',
      Primary600: '#483BC3',
      Primary700: '#362C92',
      Primary800: '#251E62', 
      Primary900: '#120F31', 
    },

    secondary: {
      Secondary50: '#E4F4FF',
      Secondary100: '#D2ECFE',
      Secondary200: '#A5DBFE',
      Secondary300: '#78C8FD',
      Secondary400: '#4BB7FD',
      Secondary500: '#1EA5FC',
      Secondary600: '#1884CA',
      Secondary700: '#126297',
      Secondary800: '#0C4265', 
      Secondary900: '#062032', 
    },
    
    helpers: {
      warning: {
        Warning50: '#FFF5E9',
        Warning100: '#FFEFDB',
        Warning200: '#FFDEB6',
        Warning300: '#FFCE92',
        Warning400: '#FFBD6D',
        Warning500: '#FFAD49',
        Warning600: '#CC8A3A',
        Warning700: '#99682C',
        Warning800: '#66451D', 
        Warning900: '#33230F', 
      },

      error: {
        Error50: '#FFECEC',
        Error100: '#FFDFDF',
        Error200: '#FFC0C0',
        Error300: '#FFA0A0',
        Error400: '#FF8181',
        Error500: '#FF6161',
        Error600: '#CC4E4E',
        Error700: '#993A3A',
        Error800: '#662727', 
        Error900: '#331313', 
      },
    },

    neutrals: {
      grey: {
        Grey50: '#EBEEF5',
        Grey100: '#C3C8D4',
        Grey200: '#A8AEBF',
        Grey300: '#8E95A9',
        Grey400: '#767E94',
        Grey500: '#61697F',
        Grey600: '#475069',
        Grey700: '#323B54',
        Grey800: '#20283E', 
        Grey900: '#121829', 
      },

      white: {
        White10: '#FFFFFF1A',
        White20: '#FFFFFF33',
        White30: '#FFFFFF4D',
        White40: '#FFFFFF66',
        White50: '#FFFFFF80',
        White65: '#FFFFFFA6',
        White75: '#FFFFFFBF',
        White100: '#FFFFFF' ,
      },

      black: {
        Black10: '#0000001A',
        Black20: '#00000033',
        Black30: '#0000004D',
        Black40: '#00000066',
        Black50: '#00000080',
        Black65: '#000000A6',
        Black75: '#000000BF',
        Black100: '#000000' ,
      },
    }
  },
  fonts: {
    heading: {
      one: () => css`
        font-weight: 600;
        font-size: ${convertToRem(64)};
        line-height: ${convertToRem(80)};
        letter-spacing: -0.02rem;
      `,
      two: () => css`
        font-weight: 600;
        font-size: ${convertToRem(48)};
        line-height: ${convertToRem(56)};
        letter-spacing: -0.02rem;
      `,
      three: () => css`
        font-weight: 600;
        font-size: ${convertToRem(32)};
        line-height: ${convertToRem(40)};
        letter-spacing: -0.02rem;
      `,
      four: () => css`
        font-weight: 700;
        font-size: ${convertToRem(24)};
        line-height: ${convertToRem(32)};
        letter-spacing: -0.015rem;
      `,
      five: () => css`
        font-weight: 700;
        font-size: ${convertToRem(20)};
        line-height: ${convertToRem(24)};
        letter-spacing: -0.015rem;
      `,
      six: () => css`
        font-weight: 700;
        font-size: ${convertToRem(16)};
        line-height: ${convertToRem(24)};
        letter-spacing: -0.015rem;
      `,
    },
    body: {
      large: () => css`
        font-weight: 400;
        font-size: ${convertToRem(20)};
        line-height: ${convertToRem(32)};
        letter-spacing: 0rem;
      `,
      regular: () => css`
        font-weight: 400;
        font-size: ${convertToRem(16)};
        line-height: ${convertToRem(24)};
        letter-spacing: 0rem;
      `,
      small: () => css`
        font-weight: 400;
        font-size: ${convertToRem(14)};
        line-height: ${convertToRem(24)};
        letter-spacing: 0em;
      `,
      extraSmall: () => css`
        font-weight: 400;
        font-size: ${convertToRem(12)};
        line-height: ${convertToRem(24)};
        letter-spacing: ${convertToRem(-16 * 0.015)};
      `,
    },
    caption: () => css`
      font-weight: 400;
      font-size: ${convertToRem(14)};
      line-height: ${convertToRem(16)};
      letter-spacing: 0rem;
    `,
    overline: {
      regular: () => css`
        font-weight: 700;
        font-size: ${convertToRem(14)};
        line-height: ${convertToRem(24)};
        letter-spacing: 0.04rem;
      `,
      small: () => css`
        font-weight: 700;
        font-size: ${convertToRem(12)};
        line-height: ${convertToRem(16)};
        letter-spacing: 0.04rem;
      `,
    },
    link: {
      regular: () => css`
        font-weight: 600;
        font-size: ${convertToRem(16)};
        line-height: ${convertToRem(24)};
        letter-spacing: 0.02rem;
      `,
      small: () => css`
        font-weight: 600;
        font-size: ${convertToRem(14)};
        line-height: ${convertToRem(24)};
        letter-spacing: 0.02rem;
      `,
      extraSmall: () => css`
        font-weight: 600;
        font-size: ${convertToRem(12)};
        line-height: ${convertToRem(24)};
        letter-spacing: 0.02rem;
      `,
    }
  }
} as const;