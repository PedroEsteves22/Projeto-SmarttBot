import { useContext, useEffect, useState } from "react";
import { GlobalBackgroundWhite, SaldoDiarioValor } from "../../styles/global";
import { AlignLeft, AlignRight, MovimetacaoTotal, PapeisNegociados, PapeisNegociadosContainer, PapeisNegociadosContent, ResumoContent } from "./styles";
import { ListaRobosContext } from "../../contexts/ListaRobosContext";
import { ListaAtivosContext } from "../../contexts/ListaAtivosProvider";

export function ResumoGeral() {
  const { listaRobos } = useContext(ListaRobosContext);
  const { listaAtivos, atualizarAtivos } = useContext(ListaAtivosContext);

  const [ resumoMovimentacao, setResumoMovimentacao ] = useState(0);
  const [ totalTransacao, setTotalTransacao ] = useState(0);

  //calculando a soma do saldoDiario dos robôs e armazenando no estado resumoMovimentacao
  useEffect(() => {
    const listasSaldo = listaRobos.map(lista => { //pegando saldoDiario de todos os robôs e armazenando no array listasSaldo
      return Number(lista.saldoDiario)
    })

    const somaSaldo = listasSaldo.reduce((acc, item) => { //somando cada valor do array listasSaldo.
      return acc + item;
    }, 0);

    setResumoMovimentacao(somaSaldo)

  }, [listaRobos])


  //calculando a soma do totalTrade dos robôs e armazenando no estado totalTransacao
  useEffect(() => {
    const listasTrade = listaRobos.map(lista => { //pegando totalTrade de todos os robôs e armazenando no array listasTrade
      return Number(lista.totalTrade)
    })

    const somaTrade = listasTrade.reduce((acc, item) => { //somando cada valor do array listasTrade.
      return acc + item;
    }, 0);

    setTotalTransacao(somaTrade)

  }, [listaRobos])

  useEffect(() => {
    atualizarAtivos();
  }, [listaRobos])

  return(
    <GlobalBackgroundWhite>
      <ResumoContent>
        <h1>Resumo geral operações</h1>

        <MovimetacaoTotal>
          <AlignLeft>
            <h2>Resumo de movimentação</h2>
            {
              resumoMovimentacao >= 0 &&
              <SaldoDiarioValor $statusCores='ligadoPositivo'>
                R${resumoMovimentacao.toFixed(2).replace('.', ',')}
              </SaldoDiarioValor>
            }

            {
              resumoMovimentacao < 0 &&
              <SaldoDiarioValor $statusCores='desligadoNegativo'>
                -R${Math.abs(resumoMovimentacao).toFixed(2).replace('.', ',')}
              </SaldoDiarioValor>
            }
          </AlignLeft>
            
          <AlignRight>
            <h2>Total de transações realizadas</h2>
            <span className="transacao">{totalTransacao}</span>
          </AlignRight>
        </MovimetacaoTotal>

        <PapeisNegociados>
          <h2>Papéis negociados</h2>
          <PapeisNegociadosContainer>

            {listaAtivos.map(listaAtivo => {
              //verificação para que somente a listaAtivo.transacao que for maior que zero apareceça na tela.
              if(listaAtivo.transacoes > 0){
                return(
                  <PapeisNegociadosContent key={listaAtivo.nome}>
                    <h3>{listaAtivo.nome}</h3>
                    <hr />
                    <h4>{listaAtivo.transacoes}</h4>
                    <span>transações</span>
                  </PapeisNegociadosContent>
                )
              }
            })}

          </PapeisNegociadosContainer>
        </PapeisNegociados>

      </ResumoContent>
    </GlobalBackgroundWhite>
  )
}