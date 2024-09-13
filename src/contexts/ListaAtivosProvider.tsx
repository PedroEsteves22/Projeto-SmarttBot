import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { ListaRobosContext } from "./ListaRobosContext";

interface listaAtivos {
  id: string;
  nome: string;
  transacoes: number;
}

interface ListaAtivosType {
  listaAtivos: listaAtivos[]
  atualizarAtivos: () => void;
}

interface ListaAtivosProviderProps {
  children: ReactNode;
}

export const ListaAtivosContext = createContext({} as ListaAtivosType)

export function ListaAtivosProvider({ children }:ListaAtivosProviderProps) {
  const [ listaAtivos, setListaAtivos ] = useState<listaAtivos[]>([]);
  const { listaRobos } = useContext(ListaRobosContext);

  const atualizarAtivos = async () => {
    try {
      listaAtivos.map(async (lista) => {
        // Filtrando a lista de robôs com cada nome do ativo
        const filtrado = listaRobos.filter((robo) => lista.nome === robo.ativo);
  
        // Extraindo totalTrade de cada robô de cada ativo
        const totalTradefiltrado = filtrado.map((valor) => valor.totalTrade);
  
        // Somando totalTrade
        const resultado = totalTradefiltrado.reduce((acc, item) => acc + item, 0);
  
        // Atualizando a API com o patch
        await api.patch(`/listaAtivos/${lista.id}`, {
          transacoes: resultado,
        });
  
        // console.log(`Ativo ${lista.nome} atualizado com sucesso:`, response.data);

        // Atualizar a página quando o valor for alterado
        // Dessa forma, quando criarmos um novo robô, esse valor de transacoes será alterado pelos novos dados do robô novo e a página será atualizada.
        setListaAtivos((state) =>
          state.map((ativo) =>
            ativo.id === lista.id ? { ...ativo, transacoes: resultado } : ativo
          )
        );
      });
  
    } catch (error) {
      console.error('Erro ao atualizar os ativos:', error);
    }
  };

  async function loadListAtivos() {
    const response = await api.get('/listaAtivos')

    setListaAtivos(response.data)
  }

  useEffect(() => {
    loadListAtivos()
  }, [])

  return(
    <ListaAtivosContext.Provider value={{ listaAtivos, atualizarAtivos }}>
      {children}
    </ListaAtivosContext.Provider>
  )
}