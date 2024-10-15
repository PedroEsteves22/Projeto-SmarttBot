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
  loading: boolean;
  loadingExibirTelaAtivo: boolean;
}

interface ListaAtivosProviderProps {
  children: ReactNode;
}

export const ListaAtivosContext = createContext({} as ListaAtivosType)

export function ListaAtivosProvider({ children }:ListaAtivosProviderProps) {
  const [ listaAtivos, setListaAtivos ] = useState<listaAtivos[]>([]);
  const { listaRobos } = useContext(ListaRobosContext);
  const [ loading, setLoading ] = useState(false);
  const [ loadingExibirTelaAtivo, setLoadingExibirTelaAtivo ] = useState(false);

  const atualizarAtivos = async () => {
    try {
      listaAtivos.map(async (lista) => {
        // Filtrando a lista de robôs com cada nome do ativo
        const filtrado = listaRobos.filter((robo) => lista.nome === robo.ativo);
  
        // Extraindo totalTrade de cada robô de cada ativo
        const totalTradefiltrado = filtrado.map((valor) => valor.totalTrade);
  
        // Somando totalTrade
        const resultado = totalTradefiltrado.reduce((acc, item) => acc + item, 0);
  
        // Atualizando a API
        await api.put(`/listaAtivos/${lista.id}`, {
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
      setLoading(true);
      new Promise(resolve => setTimeout(resolve, 2000));
  
    } catch (error) {
      console.error('Erro ao atualizar os ativos:', error);
    } finally {
      setLoading(false);
    }
  };

  async function loadListAtivos() {
    try {
      setLoading(true);
      const response = await api.get('/listaAtivos')

      setListaAtivos(response.data)
    } catch {
      console.error('Erro ao carregar os ativos')
    } finally {
      setLoading(false);
      setLoadingExibirTelaAtivo(true);
    }
  }

  useEffect(() => {
    loadListAtivos()
  }, [])

  return(
    <ListaAtivosContext.Provider value={{ listaAtivos, atualizarAtivos, loading, loadingExibirTelaAtivo }}>
      {children}
    </ListaAtivosContext.Provider>
  )
}