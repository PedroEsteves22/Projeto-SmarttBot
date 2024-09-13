import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;

  h1 {
    color: ${props => props.theme['black-500']};
    font-weight: 500;
    border-left: 1px solid ${props => props.theme['gray-300']};
    margin-left: 1.4rem;
    padding-left: 1.4rem;
  
    :first-child {
      color: ${props => props.theme['gray-300']};
    }

    :last-child {
      color: ${props => props.theme['green']};
    }
  }
`;