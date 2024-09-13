import { useContext } from "react";
import { ButtonAction, ButtonLigarRobo, Cancel, Content, Overlay, Title } from "./styles";
import { ListaRobosContext } from "../../contexts/ListaRobosContext";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

interface LigarRoboId {
  id: string;
}

export function LigarRobo({ id }: LigarRoboId) {
  const { ligarRobo } = useContext(ListaRobosContext);

  function handleLigarRobo() {
    ligarRobo({ id })
  }

  return(
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <ButtonLigarRobo>Ligar robô</ButtonLigarRobo>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <Overlay />
        <Content>
          <Title>Você tem certeza deseja ligar o robô?</Title>
          <AlertDialog.Description>
            Ao ligar o robô, ele vai alterar o status de "parado" para "executando" e vai começar a executar as ordens, os valores serão enviados novamente de forma aleatória.
          </AlertDialog.Description>
          <ButtonAction>
            <Cancel asChild>
              <button>Cancelar</button>
            </Cancel>
            <AlertDialog.Action asChild>
              <ButtonLigarRobo onClick={handleLigarRobo}>Ligar robô</ButtonLigarRobo>
            </AlertDialog.Action>
          </ButtonAction>
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}