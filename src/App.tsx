import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AnaliseGeral } from "./pages/analiseGeral"
import { ListaRobosProvider } from "./contexts/ListaRobosContext"
import { ListaAtivosProvider } from "./contexts/ListaAtivosProvider"
import { Toaster } from "sonner"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <ListaRobosProvider>
        <ListaAtivosProvider>
          <AnaliseGeral />

          <Toaster 
            toastOptions={{
              style: {
                height: '70px',
                paddingLeft: '15px'
              },
            }} 
            position="top-right" 
            richColors
          />

        </ListaAtivosProvider>
      </ListaRobosProvider>
      
    </ThemeProvider>
  )
}

export default App
