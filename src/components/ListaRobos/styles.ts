import styled from "styled-components";

export const ListaRobosContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  .id {
    font-size: 0.75rem;
    font-weight: 300;
    color: ${props => props.theme['gray-300']};
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

`;

export const RoboHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    color: ${props => props.theme['black-500']};
  }
`;

export const RoboInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.25rem;

  span {
    font-size: 0.75rem;
    font-weight: 300;
    color: ${props => props.theme['gray-300']};
    padding: 0.125rem 0.5rem;
    border: 1px solid ${props => props.theme['gray-100']};
    margin-top: 0.2rem;
    border-radius: 4px;
  }
`;

export const RoboContent = styled.div`
  margin-top: 1rem;
  border: 1px solid ${props => props.theme['gray-100']};
  padding: 0.8rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme['black-300']};
  }
`;

export const RoboPapeis = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme['gray-300']};
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme['black-500']};
  }
`;

export const RoboValores = styled.div`
  h3 {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme['gray-300']};
  }
`;

export const RoboValoresCompra = styled.span`
  font-size: 0.875rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const RoboValoresPositivo = styled(RoboValoresCompra)`
  color: ${props => props.theme['green']};

  &::before {
    content: "▲";
    font-size: 10px;
  }
`;

export const RoboValoresNegativo = styled(RoboValoresCompra)`
  color: ${props => props.theme['red']};

  &::before {
    content: "▼";
    font-size: 10px;
  }
`

export const SaldoTradeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 1rem;
`;

export const SaldoDiario = styled.div`
  h3 {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme['gray-500']};
  }
`;

export const TradesDia = styled.div`
  text-align: right;

  h3 {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme['gray-500']};
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['black-300']};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

