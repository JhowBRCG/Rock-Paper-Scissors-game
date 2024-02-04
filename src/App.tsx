import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@styles/GlobalStyles";
import { theme } from "themes/theme";
import { Home } from "pages/Home";
import { PlayerContextProvider } from "contexts/Player";
import { ComputerContextProvider } from "contexts/Computer";
import { ScoreContextProvider } from "contexts/Score";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScoreContextProvider>
        <PlayerContextProvider>
          <ComputerContextProvider>
            <GlobalStyles />
            <Home />
          </ComputerContextProvider>
        </PlayerContextProvider>
      </ScoreContextProvider>
    </ThemeProvider>
  );
}

export default App;
