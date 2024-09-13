import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from "styled-components";
import * as Select from '@radix-ui/react-select';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 179, 157, 0.7);
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled(Dialog.Content)`
  width: 27.625rem;
  border-radius: 6px;
  padding: 2.125rem;
  background: ${props => props.theme['white-300']};
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow: auto;
  max-height: 100vh;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .infoModal {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme['gray-500']};
    margin-top: 0.3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    label {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${props => props.theme['black-500']};
      margin-bottom: 0.5rem;
    }

    input {
      border: 1px solid ${props => props.theme['gray-100']};
      padding: 0.875rem;
      font-size: 0.75rem;
      color: ${props => props.theme['gray-500']};
      margin-bottom: 1rem;

      &::placeholder {
        font-size: 0.75rem;
        color: ${props => props.theme['gray-200']};
        font-weight: 500;
      }
    }

    p {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${props => props.theme['red']};
    }

    button[type="submit"] {
      border: none;
      padding: 0.5rem 1rem;
      color: ${props => props.theme['white-200']};
      font-size: 0.875rem;
      font-weight: 500;
      background: ${props => props.theme['green']};
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s;

      &:not(:disabled):hover {
        background: green;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 650px) {
    width: 17rem;
    padding: 1rem;
  }
`;

export const Title = styled(Dialog.Title)`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  line-height: 0;
  cursor: pointer;
  font-size: 1.1rem;
  transition: 0.2s;

  &:hover {
    color: ${props => props.theme['red']};
  }
`;

export const Description = styled(Dialog.Description)`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme['black-300']};
  margin-top: 1.375rem;

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

export const BotaoModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.625rem;
`;

export const CancelarModal = styled(Dialog.Close)`
  border: 1px solid ${props => props.theme['gray-100']};
  padding: 0.5rem 1rem;
  color: ${props => props.theme['black-300']};
  font-size: 0.875rem;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: ${props => props.theme['gray-100']};
  }
`;

export const BotaoSelecionar = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

export const BotaoItem = styled(RadioGroup.Item)`
  text-align: left;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme['gray-100']};
  font-size: 1rem;
  color: ${props => props.theme['gray-200']};
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &[data-state='checked'] {
    background: ${props => props.theme['red']};
    color: ${props => props.theme['white-200']};
  }

  &[data-state='unchecked']:hover {
    background: ${props => props.theme['gray-100']};
  }
`;

export const Trigger = styled(Select.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 16px;
  line-height: 1;
  width: 50%;
  height: 35px;
  gap: 5px;
  background-color: white;
  border: 0;
  color: black;
  background: ${props => props.theme['gray-100']};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${props => props.theme['gray-300']};
  }
`;

export const SelectButton = styled(Select.Content)`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const StyledItem = styled(Select.Item)`
  font-size: 16px;
  line-height: 1;
  color: black;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 15px;
  position: relative;
  user-select: none;

  &[data-highlighted] {
    background-color: lightgray;
    color: white;
  }
`;

export const ScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`; 