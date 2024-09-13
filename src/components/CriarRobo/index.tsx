import { GlobalBackgroundWhite } from "../../styles/global";
import { AvisoLimiteRobo, BotaoCriarRobo, CriarRoboContainer, CriarRoboContent } from "./styles";
import criarRoboButton from '../../assets/criarRobo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { CriarRoboModal } from "../CriarRoboModal";
import { createContext, useContext, useEffect, useState } from "react";
import { ListaRobosContext } from "../../contexts/ListaRobosContext";

interface CloseModalProps {
  CloseModal: () => void;
}

export const OpenModal = createContext({} as CloseModalProps)

export function CriarRobo() {
  const [open, setOpen] = useState(false);
  const { listaRobos } = useContext(ListaRobosContext);

  //o valor é igual a 12 somente simulando, como se o cliente tivesse um plano que o limite de robôs fosse igual a 12
  const totalRobos = 12;
  const [ robosDisponivel, setRobosDisponivel ] = useState(totalRobos);

  //fazendo a subtração do total de robôs criados com o limite de robôs que é igual a 12
  useEffect(() => {
    setRobosDisponivel(totalRobos - listaRobos.length)
  }, [listaRobos])

  //função para fechar o modal
  function CloseModal() {
    setOpen(false)
  }

  //verificando para que se o total de robôs criados for igual a 12, o botão de criar robô fica desabilitado
  const verificaRobosDisponiveis = !robosDisponivel;

  return(
    <GlobalBackgroundWhite>
      <CriarRoboContainer>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <BotaoCriarRobo disabled={verificaRobosDisponiveis}>
              <img src={criarRoboButton} alt="" />
            </BotaoCriarRobo>
          </Dialog.Trigger>

          <OpenModal.Provider value={{ CloseModal }}>
            <CriarRoboModal />
          </OpenModal.Provider>

        </Dialog.Root>

        <CriarRoboContent>
          <h2>Adicionar novo robô</h2>
          <p>Você possui <span>{robosDisponivel} robôs</span> disponíveis</p>
          {verificaRobosDisponiveis && <AvisoLimiteRobo>Você atingiu o limite de robôs, para criar novos robôs, exclua um robô primeiro!</AvisoLimiteRobo>}
        </CriarRoboContent>
      </CriarRoboContainer>
    </GlobalBackgroundWhite>
  )
}