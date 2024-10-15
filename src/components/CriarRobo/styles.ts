import styled from "styled-components";

export const CriarRoboContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const BotaoCriarRobo = styled.button`
  width: 4.6rem;
  min-width: 4.6rem;
  height: 4.3rem;
  background-color: transparent;
  border: 0;
  border: 1px solid ${props => props.theme['gray-200']};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:disabled):hover {
    background-color: ${props => props.theme['green']};
    border: 0;
  }

  &:disabled {
    background: ${props => props.theme['black-300']};
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const CriarRoboContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: 500;
    ${props => props.theme['black-500']};
  }

  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme['gray-300']};

    span {
      color: ${props => props.theme['green']};
    }
  }
`;

export const AvisoLimiteRobo = styled.h3`
  color: ${props => props.theme['red']};

  @media (max-width: 490px) {
    grid-template-columns: repeat(3, 1fr);
    font-size: 0.7rem;
  }
`;

export const LoadingSquare = styled.div`
  width: 100%;
  height: 70px;
  background-image: linear-gradient(90deg, #E3E2E3 0px, #BFB5B5 50%, #F5F5F5 100% );
  background-color: #eee;
  background-size: 200%;
  animation: skelton 1.5s infinite linear;

  @keyframes skelton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;

export const LoadingBox = styled.div`
  max-width: 220px;
  height: 20px;
  margin-bottom: 50px;
`;