import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styled from "styled-components";

export const ButtonLigarRobo = styled.button`
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
`
export const Content = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

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
`;

export const Overlay = styled(AlertDialog.Overlay)`
  background: rgba(0,0,0,0.85);
  position: fixed;
  inset: 0;
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

export const Title = styled(AlertDialog.Title)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const ButtonAction = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Cancel = styled(AlertDialog.Cancel)`
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
