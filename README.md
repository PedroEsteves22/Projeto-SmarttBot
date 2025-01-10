# Projeto-SmarttBot
=======
# React + TypeScript + Vite

No projeto é possível fazer:

- Criar Robô
- Parar Robô
- Ligar Robô
- Excluir Robô

## Tecnologias utilizadas.

- React hook form e zod: para a validação do formulário
- axios: para conectar o projeto na API
- Radix: componentes de interface para criar designs
- styled components: criação de estilos CSS
- phosphor-react: utilizar ícones no projeto
- MockApi: para a criação da API


## Criar Robô

Ao criar um novo robô, você precisa selecionar algumas informações:

- Nome do robô
- Capital inicial
- Ativo
- estratégia
- Simulador

Após clicar em "criar robô" um novo robô é criado mas algumas informações são criadas de forma aleatória, assim simulando como se o robô estivesse executando:

- Saldo diário: valor entre -100 até 100
- trades do dia: valor entre 1 até 10
- total de trades: valor entre 1 até 50
- valor compra: valor entre -100 até 100

## Parar Robô

Ao parar um robô, somente vai alterar o "executando" para "parado"

## Ligar Robô

Ao ligar um robô, vai alterar "parado" para "executando" e todas as informações que são enviadas de forma aleatória ao criar um robô novo, será enviado os mesmos valores novamente de forma aleatória.

## Excluir Robô

Ao excluir um robô, ele será removido da tela permanentemente.

## Informações na tela

Na tela, além da lista de robôs, possui várias outras informações, e essas informações são alteradas dinamicamente de acordo com os valores dos robôs, e será alterado caso os valores do robô sejam alterados.

- Resumo momvimentação: é a soma do saldo diário de todos os robôs criados.
- total de transações realizadas: é a soma do total de trades de todos os robôs criados
- papéis negociados: é a soma do total de trades de cada robô de acordo com o ativo selecionado, se não tiver nenhum robô que está utilizando certo ativo, esse ativo não irá aparecer na tela
- Robôs diponíveis: o limite de robôs para criar são 12 robôs, esse limite seria somente uma simulação como se o cliente tivesse um plano que opere até 12 robôs, então a infomração de robôs disponíveis será alterada dinamicamente de acordo com o número de robôs criados, chegando a zero, não será possível criar um novo robô.
