import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      scissors_gradient: string;
      paper_gradient: string;
      rock_gradient: string;
      cyan: string;
      dark_text: string;
      score_text: string;
      header_outline: string;
      radial_gradient: string;
      white: string;
    };

    fonts: {
      primary_font: string;
    };

    border_radius: {
      default: string;
      medium: string;
      full: string;
    };
  }
}
