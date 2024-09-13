import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
}

interface CreateRoboInput {
  titulo: string;
  capital: number;
  estrategia: 'Tangram' | 'Price action';
  simulado: 'Pessimista' | 'Otimista';
  ativo: string;
}

interface RoboId {
  id: string;
}

interface ListaRobosType {
  listaRobos: ListaRobo[];
  createRobo: (data: CreateRoboInput) => Promise<void>;
  deleteRobo: (id: RoboId) => Promise<void>
  pararRobo: (id: RoboId) => Promise<void>
  ligarRobo: (id: RoboId) => Promise<void>
}

interface ListaRobosProviderProps {
  children: ReactNode;
}

export const ListaRobosContext = createContext({} as ListaRobosType)

export function ListaRobosProvider({ children }:ListaRobosProviderProps) {
  const [ listaRobos, setListaRobos ] = useState<ListaRobo[]>([]);

  async function loadListRobo() {
    const response = await api.get('/listaRobos')
    
    setListaRobos(response.data);
  }

  //função para criar um novo robô
  async function createRobo(data: CreateRoboInput) {
    const { titulo, capital, estrategia, simulado, ativo } = data;

    const response = await api.post('listaRobos', {
      titulo,
      capital,
      estrategia,
      simulado,
      ativo,
      isActive: true,
      saldoDiario: Number((Math.random() * 201 - 100).toFixed(2)),
      valorCompra: Number((Math.random() * 201 - 100).toFixed(2)),
      totalTrade: Number(Math.ceil(Math.random() * 50)),
      tradesPorDia: Number(Math.ceil(Math.random() * 10)),
    })

    setListaRobos(state => [...state, response.data]);
  }

  //função para excluir um robô
  async function deleteRobo({ id }: RoboId) {
    try{
      await api.delete(`/listaRobos/${ id }`)

      //atualizar a página assim que o robô é excluído
      setListaRobos(state => state.filter(robo => {
        return robo.id !== id;
      }))

    } catch (error) {
      console.error('Erro ao excluir o robô');
    }
  }

  // função para ligar o robô
  async function ligarRobo({ id }: RoboId) {
    const updateRoboData = {
      isActive: true,
      saldoDiario: Number((Math.random() * 201 - 100).toFixed(2)),
      valorCompra: Number((Math.random() * 201 - 100).toFixed(2)),
      totalTrade: Number(Math.ceil(Math.random() * 50)),
      tradesPorDia: Number(Math.ceil(Math.random() * 10)),
    }

    await api.patch(`/listaRobos/${id}`, updateRoboData);

    //atualizar a página ao ligar o robô
    setListaRobos((state) =>
      state.map((robo) =>
        robo.id === id ? { ...robo, ...updateRoboData} : robo
      )
    );
  }

  // função parar robô
  async function pararRobo({ id }: RoboId) {
    const stopRoboData = {
      isActive: false,
    }

    await api.patch(`/listaRobos/${id}`, stopRoboData);
    
    //atualizar a página quando parar um robô
    setListaRobos((state) =>
      state.map((robo) =>
        robo.id === id ? { ...robo, ...stopRoboData } : robo
      )
    );
  }

  useEffect(() => {
    loadListRobo();
  }, [])

  return(
    <ListaRobosContext.Provider value={{ listaRobos, createRobo, deleteRobo, pararRobo, ligarRobo }}>
      {children}
    </ListaRobosContext.Provider>
  )
}