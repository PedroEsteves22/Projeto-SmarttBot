import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AnaliseGeral } from "./pages/analiseGeral"
import { ListaRobosProvider } from "./contexts/ListaRobosContext"
import { ListaAtivosProvider } from "./contexts/ListaAtivosProvider"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <ListaRobosProvider>
        <ListaAtivosProvider>
          <AnaliseGeral />
        </ListaAtivosProvider>
      </ListaRobosProvider>
      
    </ThemeProvider>
  )
}

export default App
