import { useContext } from "react";
import { ListaRobosContext } from "../../contexts/ListaRobosContext";
import { Trash } from "phosphor-react";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ButtonAction, ButtonExcluirRobo, Cancel, Content, ExcluirRoboBotao, Overlay, Title } from "./styles";

interface RoboInfo {
  id: string;
  nomeRobo: string;
}

export function ExcluirRobo({ id, nomeRobo }:RoboInfo) {
  const { deleteRobo } = useContext(ListaRobosContext);

  function handleClickExcluir() {
    deleteRobo({ id, nomeRobo });
  }

  return(
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <ExcluirRoboBotao>
          <Trash className="excluir" size={24} />
        </ExcluirRoboBotao>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <Overlay />
        <Content>
          <Title>Você tem certeza deseja excluir o robô?</Title>
          <AlertDialog.Description>
            Ao excluir o robô, ele será removido permanentemente, essa ação não pode ser desfeita
          </AlertDialog.Description>
          <ButtonAction>
            <Cancel asChild>
              <button>Cancelar</button>
            </Cancel>
            <AlertDialog.Action asChild>
              <ButtonExcluirRobo onClick={handleClickExcluir}>Excluir</ButtonExcluirRobo>
            </AlertDialog.Action>
          </ButtonAction>
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}