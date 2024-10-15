import { useContext} from "react";
import { ButtonAction, ButtonPararRobo, Cancel, Content, Overlay, Title } from "./styles";
import { ListaRobosContext } from "../../contexts/ListaRobosContext";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

interface PararRoboInfo {
  id: string;
  nomeRobo: string;
}

export function PararRobo({ id, nomeRobo }: PararRoboInfo) {
  const { pararRobo } = useContext(ListaRobosContext)

  function handlePararRobo() {
    pararRobo({ id, nomeRobo })
  }

  return(
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <ButtonPararRobo>Parar Robô</ButtonPararRobo>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <Overlay />
        <Content>
          <Title>Você tem certeza deseja parar o robô?</Title>
          <AlertDialog.Description>
            Ao parar o robô, ele mudará o status de "executando" para "parado", e você pode ligar o robô a qualquer momento.
          </AlertDialog.Description>
          <ButtonAction>
            <Cancel asChild>
              <button>Cancelar</button>
            </Cancel>
            <AlertDialog.Action asChild>
              <ButtonPararRobo onClick={handlePararRobo}>Parar Robô</ButtonPararRobo>
            </AlertDialog.Action>
          </ButtonAction>
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}