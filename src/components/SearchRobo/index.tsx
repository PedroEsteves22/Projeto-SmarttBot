import { MagnifyingGlass } from "phosphor-react";
import { BotaoLimparFiltro, SearchRoboContainer, SearchRoboForm } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ListaRobosContext } from "../../contexts/ListaRobosContext";

const searchRoboSchema = z.object({
  query: z.string(),
})

type SearchRoboInputs = z.infer<typeof searchRoboSchema>;

export function SearchRobo() {
  const { fetchListRobo } = useContext(ListaRobosContext);

  const { 
    register, 
    handleSubmit,
    reset,
    watch
  } = useForm<SearchRoboInputs>({
    resolver: zodResolver(searchRoboSchema),
  })

  async function handleSearchRobo(data: SearchRoboInputs) {
    await fetchListRobo(data.query)
    reset();
  }

  async function handleLimparFiltro() {
    await fetchListRobo();
  }

  const query = watch('query');
  const isSubmitDisabled = !query

  return(
    <>
      <SearchRoboContainer>
        <SearchRoboForm onSubmit={handleSubmit(handleSearchRobo)}>
          <input 
            type="text" 
            placeholder="Busque por robôs"
            {...register('query')}
          />
          <button type="submit" disabled={isSubmitDisabled}>
            <MagnifyingGlass size={15} />
            Buscar
          </button>
        </SearchRoboForm>

        <BotaoLimparFiltro onClick={handleLimparFiltro}>
          Limpar Filtro
        </BotaoLimparFiltro>
      </SearchRoboContainer>
    </>
  )
}