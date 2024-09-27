# Bem-vindo ao projeto CDK em TypeScript

Este é um projeto para desenvolvimento CDK com TypeScript.

O ambiente de desenvolvimento utilizado no projeto foi preparado com as seguintes ferramentas e tecnologias:

* Node.js e NPM:        - Utilizados para gerenciar pacotes e dependências do projeto, garantindo que a aplicação possa ser construída e implantada corretamente.
* AWS CLI:              - Ferramenta de linha de comando da AWS para gerenciar e monitorar recursos na nuvem, sendo essencial para o deploy e interação com os serviços AWS.
* AWS CDK (Cloud Development Kit): - Utilizado para definir e provisionar a infraestrutura da aplicação por meio de código. A versão do CDK foi instalada e verificada para garantir a compatibilidade com o projeto.
* Visual Studio Code:   - IDE utilizada para o desenvolvimento do código da aplicação e infraestrutura.
* Postman:              - Aplicativo utilizado para testar e validar as requisições HTTP, tanto localmente quanto na AWS.
* Docker Desktop:       - Ferramenta utilizada para compilar e testar localmente as funções Lambda antes de implantá-las na AWS.

Para uso do cdk estou utilizando acesso por `sso`:
 * `aws sso login --profile <nome_profile>`

  *obs: poderia ser por usuário `iam` com as respectivas permissões

### Alguns passosimportantes:
 Cria o diretório do projeto (ECommerceAWS):

 * `mkdir ECommerceAWS && cd ECommerceAWS`
 
 Instala o AWS CDK:

 * `npm install -g aws-cdk`

 Inicializa o CDK com suporte a TypeScript:

 * `cdk init app --language typescript`

  *Obs: cria a estrutura inicial do projeto, incluindo o cdk.json e a pasta lib para as definições da infraestrutura.

 Instala as dependências necessárias:

 * `npm install typescript ts-node @types/node`

  *obs: o CDK já configura o tsconfig.json automaticamente.

 Gera o template CloudFormation do código TypeScript:

 * `cdk synth`

 Prepara o ambiente da AWS para receber os recursos (apenas na primeira execução). cdk bootstrap: 

 * `cdk bootstrap`

Faz o deploy da infraestrutura para a conta AWS.cdk deploy: 
 * `cdk deploy`

  *obs: o arquivo `cdk.json` informa ao CDK Toolkit como executar sua aplicação.

## Outros comandos úteis

 * `npm run build`   compila TypeScript para JavaScript
 * `npm run watch`   observa por mudanças e compila
 * `npm run test`    executa os testes unitários com o Jest
 * `npx cdk deploy`  faz o deploy desta stack para sua conta/região AWS padrão
 * `npx cdk diff`    compara a stack implantada com o estado atual
 * `npx cdk synth`   emite o template CloudFormation sintetizado

Será adicionado mais componentes à infraestrutura. Fique ligado!
