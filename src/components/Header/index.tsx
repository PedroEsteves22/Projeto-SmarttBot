import { HeaderContent } from "./styles";
import combineShape from '../../assets/combinedShape.svg';
import { GlobalBackgroundWhite } from "../../styles/global";

export function Header() {
  return(
      <GlobalBackgroundWhite>
        <HeaderContent>
          <img src={combineShape} alt="" />
          <h1>Análise Geral <span>/</span> <span>Principal</span></h1>
        </HeaderContent>
      </GlobalBackgroundWhite>
  )
}