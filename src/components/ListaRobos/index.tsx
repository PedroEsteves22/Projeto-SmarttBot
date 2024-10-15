import { GlobalBackgroundWhite, SaldoDiarioValor, VerificaRoboLigado } from "../../styles/global";
import { ButtonContainer, ListaRobosContainer, LoadingBox, LoadingOverlay, LoadingSquare, NenhumRoboCriado, RoboContent, RoboHeader, RoboInfo, RoboPapeis, RoboValores, RoboValoresNegativo, RoboValoresPositivo, SaldoDiario, SaldoTradeContainer, TradesDia } from "./styles";
import arrow from '../../assets/arrow.svg';
import { useContext, useEffect, useState } from "react";
import { ListaRobosContext } from "../../contexts/ListaRobosContext";
import { ExcluirRobo } from "../excluirRobo";
import { LigarRobo } from "../ligarRobo";
import { PararRobo } from "../pararRobo";
import { ClipLoader} from "react-spinners";

export function ListaRobos() {
  const { listaRobos, loading, loadingExibirTelaRobo } = useContext(ListaRobosContext);
  const [ loadingScreen, setLoadingScreen ] = useState(true);

  useEffect(() => {
    if(loadingExibirTelaRobo) {
      setLoadingScreen(false);
    } else {
      setLoadingScreen(true);
    }
  }, [loadingExibirTelaRobo])

  if(loadingScreen) {
    return(
      <LoadingBox>
        <LoadingSquare />
        <LoadingSquare />
        <LoadingSquare />
        <LoadingSquare />
      </LoadingBox>
    )
  }

  return(
    <>
      {
        !loadingScreen && listaRobos.length === 0 &&(
          <NenhumRoboCriado>
            <p>Não foi encontrado nenhum robô!</p>
          </NenhumRoboCriado>
        )
      }

      <ListaRobosContainer>

        {loading && (
          <LoadingOverlay>
            <ClipLoader size={50} color="#36D7B7" />
          </LoadingOverlay>
        )}

        {listaRobos.map(listaRobo => {
          return(
            <GlobalBackgroundWhite key={listaRobo.id}>
              <RoboHeader>
                <h1>{listaRobo.titulo}</h1>
                {listaRobo.isActive && <VerificaRoboLigado $statusCores="ligadoPositivo">Executando</VerificaRoboLigado>}
                {!listaRobo.isActive && <VerificaRoboLigado $statusCores="desligadoNegativo">Parado</VerificaRoboLigado>}
              </RoboHeader>
              <span className="id">#{listaRobo.roboId}</span>

              <RoboInfo>
                <span>{listaRobo.simulado}</span>
                <span>{listaRobo.ativo}</span>
                <span>{listaRobo.estrategia}</span>
              </RoboInfo>

              <RoboContent>
                <h2>{listaRobo.totalTrade}</h2>
                <RoboPapeis>
                  <h3>{listaRobo.ativo}</h3>
                  <span>Compra</span>
                </RoboPapeis>
                <RoboValores>
                  <h3>114.987.09</h3>

                  {
                    listaRobo.valorCompra >= 0 && 
                    <RoboValoresPositivo>
                      R${listaRobo.valorCompra.toString().replace('.', ',')}
                    </RoboValoresPositivo>
                  }

                  {
                    listaRobo.valorCompra < 0 && 
                    <RoboValoresNegativo>
                      -R${Math.abs(listaRobo.valorCompra).toString().replace('.', ',')}
                    </RoboValoresNegativo>
                  }

                </RoboValores>
              </RoboContent>

              <SaldoTradeContainer>
                <SaldoDiario>
                  <h3>Saldo diário <img src={arrow} alt="" /></h3>

                  {
                    listaRobo.saldoDiario >= 0 && 
                    <SaldoDiarioValor $statusCores='ligadoPositivo'>
                      R${listaRobo.saldoDiario.toString().replace('.', ',')}
                    </SaldoDiarioValor>    
                  }

                  {
                    listaRobo.saldoDiario < 0 && 
                    <SaldoDiarioValor $statusCores='desligadoNegativo'>
                      -R${Math.abs(listaRobo.saldoDiario).toString().replace('.', ',')}
                    </SaldoDiarioValor>
                  }

                </SaldoDiario>
                <TradesDia>
                  <h3>Trades do dia</h3>
                  <span>{listaRobo.tradesPorDia}</span>
                </TradesDia>
              </SaldoTradeContainer>

              <ButtonContainer>
                
                {
                  !listaRobo.isActive &&
                  <LigarRobo 
                    id={listaRobo.id} 
                    nomeRobo={listaRobo.titulo}
                  />
                }
                {
                  listaRobo.isActive && 
                  <PararRobo 
                    id={listaRobo.id}
                    nomeRobo={listaRobo.titulo}
                  />
                }

                <ExcluirRobo 
                  id={listaRobo.id}
                  nomeRobo={listaRobo.titulo}
                />
              </ButtonContainer>
            </GlobalBackgroundWhite>
          )
        })}
      </ListaRobosContainer>
    </>
  )
}