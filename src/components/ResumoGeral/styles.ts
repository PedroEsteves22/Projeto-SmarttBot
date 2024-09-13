import styled from "styled-components";

export const ResumoContent = styled.div`
  h1 {
    font-weight: 500;
  }
`;

export const MovimetacaoTotal = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.5rem 0; 
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme['gray-200']};

  h2 {
    font-size: 0.75rem;
    color: ${props => props.theme['gray-500']};
  }

  .movimentacao {
    color: ${props => props.theme['red']};
    font-size: 1.25rem;
    font-weight: 500;
  }

  .transacao {
    color: ${props => props.theme['black-500']};
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const AlignLeft = styled.div`
  text-align: left;
`;

export const AlignRight = styled.div`
  text-align: right;
`;

export const PapeisNegociados = styled.div`
  h2 {
    font-size: 0.75rem;
    color: ${props => props.theme['gray-500']};
  }
`;

export const PapeisNegociadosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 7.8rem;
  margin-top: 1rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const PapeisNegociadosContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme['white-300']};
    background: ${props => props.theme['green']};
    padding: 0.5rem;
    border-radius: 4px;
  }

  hr {
    flex: 1;
    border: none; /* Remove a borda padrão */
    height: 1px; /* Altura da linha */
    background-image: linear-gradient(to right, ${props => props.theme['gray-200']} 37%, rgba(255, 255, 255, 0) 0%);
    background-size: 7px 2px; /* Ajuste o tamanho dos traços e o espaço entre eles */
    background-repeat: repeat-x; /* Repetir horizontalmente */
  }

  h4 {
    font-size: 0.75rem;
    color: ${props => props.theme['black-500']};
    font-weight: 700;
  }

  span {
    font-size: 0.75rem;
    color: ${props => props.theme['gray-500']};
    font-weight: 300;
  }
`;

