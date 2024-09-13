import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${props => props.theme['white-200']};
  }

  body, h1, h2, h4, h3, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }
`;

export const GlobalBackgroundWhite = styled.div`
  background: ${props => props.theme['white-300']};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 ${props => props.theme['gray-200']};

  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
`;

//Estilização para cores quando um valor for negativo, positivo e robô ligado ou desligado
const STATUS_COLORS = {
  ligadoPositivo: 'green',
  desligadoNegativo: 'red'
}

interface StatusCores {
  $statusCores: keyof typeof STATUS_COLORS;
}

export const VerificaRoboLigado = styled.span<StatusCores>`
  font-size: 0.875rem;
  color: ${props => props.theme['gray-500']};
  font-weight: 300;

  &::before {
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: ${props => props.theme[STATUS_COLORS[props.$statusCores]]};
    margin-right: 0.4rem;
    display: inline-block;
  }
`

export const SaldoDiarioValor = styled.span<StatusCores>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme[STATUS_COLORS[props.$statusCores]]};
`