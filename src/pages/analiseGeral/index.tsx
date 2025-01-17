import { CriarRobo } from "../../components/CriarRobo";
import { Header } from "../../components/Header";
import { ListaRobos } from "../../components/ListaRobos";
import { ResumoGeral } from "../../components/ResumoGeral";
import { SearchRobo } from "../../components/SearchRobo";
import { AnaliseContainer } from "./styles";

export function AnaliseGeral() {
  return(
    <AnaliseContainer>
      <Header />
      <ResumoGeral />
      <CriarRobo />
      <SearchRobo />
      <ListaRobos />
    </AnaliseContainer>
  )
}