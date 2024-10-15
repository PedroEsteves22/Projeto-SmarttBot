import styled from "styled-components";

export const SearchRoboContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchRoboForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border: 1px solid ${props => props.theme['gray-300']};
    border-radius: 8px;
    padding: 0.875rem;
    font-size: 0.75rem;
    color: ${props => props.theme['black-300']};
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: none;

    &::placeholder {
      font-size: 0.75rem;
      color: ${props => props.theme['gray-200']};
      font-weight: 500;
    }

    &:focus {
      border-color: ${props => props.theme['black-500']};
    }
  }

  button[type="submit"] {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    padding: 0 1rem;
    height: 2.7rem;
    color: ${props => props.theme['white-200']};
    font-size: 0.875rem;
    font-weight: 500;
    background: ${props => props.theme['green']};
    cursor: pointer;
    transition: 0.3s;

    &:not(:disabled):hover {
      background: green;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: black;
    }

    @media (max-width: 900px) {
      font-size: 0.7rem;
    }
  }
`;

export const BotaoLimparFiltro = styled.button`
  border: none;
  padding: 0 1rem;
  height: 2.7rem;
  color: ${props => props.theme['white-200']};
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => props.theme['red']};
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;

  &:not(:disabled):hover {
    background: #343442;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;