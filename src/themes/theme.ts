import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    scissors_gradient: "hsl(39, 89%, 49%),hsl(40, 84%, 53%)",
    paper_gradient: "hsl(230, 89%, 62%),hsl(230, 89%, 65%)",
    rock_gradient: "hsl(349, 71%, 52%),hsl(349, 70%, 56%)",
    cyan: "hsl(189, 59%, 53%),hsl(189, 58%, 57%)",
    dark_text: "hsl(229, 25%, 31%)",
    score_text: "hsl(229, 64%, 46%)",
    header_outline: "hsl(217, 16%, 45%)",
    radial_gradient: "hsl(214, 47%, 23%),hsl(237, 49%, 15%)",
    white: "hsl(100, 100%, 100%)",
  },

  fonts: {
    primary_font: "'Barlow Semi Condensed', sans-serif;",
  },

  border_radius: {
    default: "20px",
    medium: "10px",
    full: "999px",
  },
};
