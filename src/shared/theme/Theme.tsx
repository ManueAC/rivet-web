import { createTheme } from "@mui/material";
import {
  BACKGROUND_COLOR,
  BLACK_TEXT,
  GRAY_COLOR,
  GRAY_LIGHT_COLOR,
  PRIMARY_COLOR,
  RED_ERROR,
  WHITE_COLOR,
} from "../constants";

declare module "@mui/material/styles" {
  interface Palette {
    gray: Palette["primary"];
    grayLight: Palette["primary"];
    disabled: Palette["primary"];
    black: Palette["primary"];
  }
  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
    grayLight?: PaletteOptions["primary"];
    disabled?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    gray: string;
    grayLight: string;
    disabled: string;
    black: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: PRIMARY_COLOR,
      light: PRIMARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    gray: {
      main: GRAY_COLOR,
      light: GRAY_LIGHT_COLOR,
      contrastText: WHITE_COLOR,
    },
    grayLight: {
      main: GRAY_LIGHT_COLOR,
      contrastText: WHITE_COLOR,
    },
    disabled: {
      main: GRAY_COLOR,
      contrastText: WHITE_COLOR,
    },
    black: {
      main: BLACK_TEXT,
      contrastText: WHITE_COLOR,
    },
    error: {
      main: RED_ERROR,
      contrastText: WHITE_COLOR,
    },
    background: {
      default: BACKGROUND_COLOR,
    },
  },
});
