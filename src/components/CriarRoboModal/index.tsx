import * as Dialog from '@radix-ui/react-dialog';
import { BotaoItem, BotaoModal, BotaoSelecionar, CancelarModal, Close, Content, Description, Overlay, ScrollDownButton, ScrollUpButton, SelectButton, StyledItem, StyledViewport, Title, Trigger } from './styles';
import * as zod from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Select from '@radix-ui/react-select';
import arrow from '../../assets/arrow.svg';
import { useContext } from 'react';
import { OpenModal } from '../CriarRobo';
import { ListaRobosContext } from '../../contexts/ListaRobosContext';
import setaUp from '../../assets/ChevronUp.svg';
import setaDown from '../../assets/ChevronDown.svg';
import { ListaAtivosContext } from '../../contexts/ListaAtivosProvider';

const newCreationRoboSchema = zod.object({
  titulo: 
    zod.string()
    .trim()
    .min(1, 'Informe o título do robô!')
    .max(12, 'O máximo de caracteres não pode ser maior do que 10!'),

  capital: zod
    .string() // Recebe o valor como string
    .trim() //remover espaços em branco
    .min(1, 'Informe o valor do capital do robô!') // Garante que o campo não está vazio
    .refine((value) => {
      const numberValue = Number(value);
      return !isNaN(numberValue) && numberValue >= 1 && numberValue <= 50000;
    }, {
      message: 'O valor deve ser um número entre 1 e 50.000!',
    }) // Valida se o valor é um número entre 1 e 50.000
    .transform((value) => Number(value)), // Converte a string para número

  estrategia: zod.enum(['Tangram', 'Price action']),
  simulado: zod.enum(['Pessimista', 'Otimista']),
  ativo: zod.string()
})

type NewCreateRoboFormInputs = zod.infer<typeof newCreationRoboSchema>;

export function CriarRoboModal() {
  const { CloseModal } = useContext(OpenModal);
  const { createRobo } = useContext(ListaRobosContext);
  const { listaAtivos } = useContext(ListaAtivosContext);

  const { register, handleSubmit, control, reset, formState: { isSubmitting, errors } } = useForm<NewCreateRoboFormInputs>({
    resolver: zodResolver(newCreationRoboSchema),
    defaultValues: { //setar valores padrões para o input
      estrategia: 'Tangram',
      simulado: 'Pessimista',
      ativo: 'WING20'
    }
  })

  async function handleCreateNewRobo(data: NewCreateRoboFormInputs) {
    const { titulo, capital, estrategia, simulado, ativo } = data;

    await new Promise(resolve => setTimeout(resolve, 1000)); //após clicar em criar robô, irá ter um delay de 1 segundo.

    await createRobo({
      titulo,
      capital,
      estrategia,
      simulado,
      ativo,
    })
  
    //modal será fechado assim que um robô for criado
    CloseModal();
    //o formulário será resetado ao criar um novo robô
    reset();
  }

  return(
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>
          Adicionar novo robô
          <Close>X</Close>
        </Title>
        <Description>Vamos criar seu robô</Description>
        <p className='infoModal'>Preencha as informações abaixo:</p>

        <form onSubmit={handleSubmit(handleCreateNewRobo)} autoComplete='off'>
          <label htmlFor='name'>Nome do produto</label>
          <p>{errors.titulo?.message}</p>
          <input
            id='name'
            type="text"
            placeholder='Nome do produto'
            autoComplete='name'
            {...register('titulo')}
           />

          <label htmlFor='capital'>Capital Inicial do robô</label>
          <p>{errors.capital?.message}</p>
          <input
            id='capital'
            type="number"
            placeholder='R$'
            {...register('capital')}
          />

          <Controller 
            control={control}
            name='ativo'
            render={({ field }) => {
              return(
                <Select.Root onValueChange={field.onChange} value={field.value}>
                  <label id='ativo'>Selecione o Ativo:</label>
                  <Trigger>
                    <Select.Value placeholder='Selecione o Ativo' />
                    <Select.Icon>
                      <img src={arrow} alt="" />
                    </Select.Icon>
                  </Trigger>

                  <Select.Portal>
                    <SelectButton>
                      <ScrollUpButton>
                        <img src={setaUp} alt="" />
                      </ScrollUpButton>

                      <StyledViewport>
                        {listaAtivos.map((lista) => {
                          return(
                            <StyledItem value={lista.nome} key={lista.id}>
                              <Select.ItemText>{lista.nome}</Select.ItemText>
                            </StyledItem>
                          )
                        })}
                      </StyledViewport>

                      <ScrollDownButton className="SelectScrollButton">
                        <img src={setaDown} alt="" />
                      </ScrollDownButton>

                    </SelectButton>
                  </Select.Portal>
                </Select.Root>
              )
            }}
          />

          <Controller 
            control={control}
            name='estrategia'
            render={({ field }) => {
              return(
                <BotaoSelecionar onValueChange={field.onChange} value={field.value} id='estrategia'>
                  <label id='estrategia'>Selecione uma das estratégias abaixo</label>
                  <BotaoItem value='Tangram'>Tangram</BotaoItem>
                  <BotaoItem value='Price action'>Price Action</BotaoItem>
                </BotaoSelecionar>
              )
            }}
          />

          <Controller 
            control={control}
            name='simulado'
            render={({ field }) => {
              return(
                <Select.Root onValueChange={field.onChange} value={field.value}>
                  <label id='simulado'>Selecione o simulador:</label>
                  <Trigger>
                    <Select.Value placeholder='Selecione o simulador' />
                    <Select.Icon>
                      <img src={arrow} alt="" />
                    </Select.Icon>
                  </Trigger>

                  <Select.Portal>
                    <SelectButton>
                      <StyledViewport>
                        <StyledItem value='Pessimista'>
                          <Select.ItemText>Pessimista</Select.ItemText>
                        </StyledItem>
                        <StyledItem value='Otimista'>
                          <Select.ItemText>Otimista</Select.ItemText>
                        </StyledItem>
                      </StyledViewport>
                    </SelectButton>
                  </Select.Portal>
                </Select.Root>
              )
            }}
          />

          <BotaoModal>
            <CancelarModal>Cancelar</CancelarModal>
            <button type='submit' disabled={isSubmitting}>Criar robô</button>
          </BotaoModal>
        </form>
      </Content>

    </Dialog.Portal>
  )
}