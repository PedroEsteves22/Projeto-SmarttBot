import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { toast } from "sonner";

interface ListaRobo {
  id: string;
  titulo: string;
  capital: number;
  estrategia: "Tangram" | "Price action";
  simulado: "Pessimista" | "Otimista";
  isActive: boolean;
  saldoDiario: number;
  valorCompra: number;
  totalTrade: number;
  tradesPorDia: number;
  ativo: string;
  roboId: string;
}

interface CreateRoboInput {
  titulo: string;
  capital: number;
  estrategia: 'Tangram' | 'Price action';
  simulado: 'Pessimista' | 'Otimista';
  ativo: string;
}

interface RoboInfo {
  id: string;
  nomeRobo: string;
}

interface ListaRobosType {
  listaRobos: ListaRobo[];
  listaRobos2: ListaRobo[];
  fetchListRobo: (query?: string) => Promise<void>
  fetchListRobo2: () => Promise<void>
  createRobo: (data: CreateRoboInput) => Promise<void>;
  deleteRobo: (id: RoboInfo) => Promise<void>
  pararRobo: (id: RoboInfo) => Promise<void>
  ligarRobo: (id: RoboInfo) => Promise<void>
  loading: boolean;
  loadingExibirTelaRobo: boolean;
}

interface ListaRobosProviderProps {
  children: ReactNode;
}

export const ListaRobosContext = createContext({} as ListaRobosType)

export function ListaRobosProvider({ children }:ListaRobosProviderProps) {
  const [ listaRobos, setListaRobos ] = useState<ListaRobo[]>([]);
  const [ listaRobos2, setListaRobos2 ] = useState<ListaRobo[]>([]);

  const [ loading, setLoading ] = useState(false);
  const [ loadingExibirTelaRobo, setLoadingExibirTelaRobo ] = useState(false);

  async function fetchListRobo2() {
    try {
      const response = await api.get('/listaRobos')
      setListaRobos2(response.data);
    } catch {
      console.error('Nenhum robô encontrado');
    }
  }

  async function fetchListRobo(query?: string,) {
    try {
      setLoadingExibirTelaRobo(false);
      const response = await api.get('/listaRobos', {
        params: {
          titulo: query?.trim(),
        }
      })
      setListaRobos(response.data);
    } catch {
      console.error('Nenhum robô encontrado');
      setListaRobos([])
    } finally {
      setLoadingExibirTelaRobo(true);
      setLoading(false);
    }
  }

  //função para criar um novo robô
  async function createRobo(data: CreateRoboInput) {
    try {
      setLoading(true);

      const { titulo, capital, estrategia, simulado, ativo } = data;

      const response = await api.post('listaRobos', {
        titulo,
        capital,
        estrategia,
        simulado,
        ativo,
        isActive: true,
        //os valores são gerados de forma aleatória de -100 até 100
        saldoDiario: Number((Math.random() * 201 - 100).toFixed(2)),
        valorCompra: Number((Math.random() * 201 - 100).toFixed(2)),
        //os valores são gerados de forma aleatória de 1 até 50
        totalTrade: Number(Math.ceil(Math.random() * 50)),
        //os valores são gerados de forma aleatória de 1 até 10
        tradesPorDia: Number(Math.ceil(Math.random() * 10)),
        //os valores são gerados de acordo com a data atual em milisegundos
        roboId: String(new Date().getTime())
      })

      await new Promise(resolve => setTimeout(resolve, 1000));
      fetchListRobo();
      setListaRobos2(state => [...state, response.data]);
      toast.success('Robô criado com sucesso!');
    } catch (err) {
      console.error('Erro ao criar o robô');
    } finally {
      setLoading(false);
    }
  }

  //função para excluir um robô
  async function deleteRobo({ id, nomeRobo }: RoboInfo) {
    try{
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await api.delete(`/listaRobos/${ id }`).then(() => {
        //atualizar a página assim que o robô é excluído
        setListaRobos(state => state.filter(robo => {
          return robo.id !== id;
        }))

        setListaRobos2(state => state.filter(robo => {
          return robo.id !== id;
        }))
      })

      toast.success(`Robô "${nomeRobo}" excluído com sucesso!`);
      
    } catch (error) {
      console.error('Erro ao excluir o robô');
    } finally {
      setLoading(false);
    }
  }

  // função para ligar o robô
  async function ligarRobo({ id, nomeRobo }: RoboInfo) {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      const updateRoboData = {
        isActive: true,
        saldoDiario: Number((Math.random() * 201 - 100).toFixed(2)),
        valorCompra: Number((Math.random() * 201 - 100).toFixed(2)),
        totalTrade: Number(Math.ceil(Math.random() * 50)),
        tradesPorDia: Number(Math.ceil(Math.random() * 10)),
      }

      await api.put(`/listaRobos/${id}`, updateRoboData).then(() => {
        //atualizar a página ao ligar o robô
        setListaRobos((state) =>
          state.map((robo) =>
            robo.id === id ? { ...robo, ...updateRoboData} : robo
          )
        );
      });

      toast.success(`Robô "${nomeRobo}" ligado com sucesso!`);

    } catch(err) {
      console.error('Erro ao ligar o robô');
    } finally {
      setLoading(false);
    }
  }

  // função parar robô
  async function pararRobo({ id, nomeRobo }: RoboInfo) {
    try {

      const stopRoboData = {
        isActive: false,
      }

      toast.promise(
        api.put(`/listaRobos/${id}`, stopRoboData).then(() => {
          //atualizar a página quando parar um robô
          setListaRobos((state) =>
            state.map((robo) =>
              robo.id === id ? { ...robo, ...stopRoboData } : robo
            )
          );
        }),
        {
          loading: 'Parando o robô...',
          success: `Robô "${nomeRobo}" parado com sucesso!`,
          error: `Erro ao parar o robô "${nomeRobo}"`,
        }
      )
      
    } catch(err) {
      console.error('Erro ao parar o robô');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListRobo();
    fetchListRobo2();
  }, [])

  return(
    <ListaRobosContext.Provider value={{ 
      listaRobos, 
      createRobo, 
      deleteRobo, 
      pararRobo, 
      ligarRobo, 
      loading, 
      loadingExibirTelaRobo, 
      fetchListRobo,
      fetchListRobo2,
      listaRobos2
    }}>
      {children}
    </ListaRobosContext.Provider>
  )
}