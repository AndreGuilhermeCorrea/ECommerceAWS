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

 * `npm run build`      compila TypeScript para JavaScript
 * `npm run watch`      observa por mudanças e compila
 * `npm run test`       executa os testes unitários com o Jest
 * `npx cdk deploy`     faz o deploy desta stack para sua conta/região AWS padrão
 * `cdk deploy --all`   faz o deploy de todas as stacks para sua conta/região AWS padrão	
 * `npx cdk diff`       compara a stack implantada com o estado atual
 * `npx cdk synth`      emite o template CloudFormation sintetizado
 * `cdk list`           lista as stacks gerenciadas por este app
 * `cdk destroy --all`  deleta todas as stacks gerenciadas por este app	

 Foram também instaladas as seguintes dependências:
 
 `npm install aws-sdk @types/aws-lambda uuid @types/uuid --save-dev`

  *obs: o pacote aws-sdk é necessário para interagir com os serviços da AWS, enquanto o uuid é utilizado para gerar identificadores únicos para os registros do DynamoDB.

## Sobre alguns conceitos importantes do AWS:

 * AWS: Amazon Web Services, plataforma de serviços em nuvem da Amazon.
 * CDK: Cloud Development Kit, framework para definir e provisionar infraestrutura como código.
 * Cli: Command Line Interface, ferramenta de linha de comando para interagir com a AWS.
 * SDK: Software Development Kit, conjunto de ferramentas para desenvolver aplicações.
 * SSO: Single Sign-On, autenticação única para acessar várias contas e serviços.
 * CloudFormation: Serviço para criar e gerenciar recursos da AWS por meio de templates.
 * IAM: Identity and Access Management, serviço para gerenciar permissões e usuários.
 * S3: Simple Storage Service, serviço de armazenamento de objetos da AWS.
 * EC2: Elastic Compute Cloud, serviço de máquinas virtuais da AWS.
 * RDS: Relational Database Service, serviço de banco de dados relacional da AWS.
 * CloudWatch: Serviço de monitoramento e observabilidade da AWS.
 * Lambda: Função sem servidor que executa código em resposta a eventos.
 * Função: Código executado sem servidor para processar eventos.
 * Trigger: Evento que aciona a execução da função (ex: S3, API Gateway).
 * Eventos: Dados que a função recebe como entrada ao ser acionada.
 * Stack: Conjunto de recursos da AWS provisionados por um template.
 * Runtime: Ambiente de execução, como Node.js, Python, ou Java.
 * Concorrência: Número de execuções simultâneas, escalável automaticamente.
 * Custo por Tempo de Execução: Cobrado por milissegundo com base na duração e memória alocada.
 * Memória Consumida: Alocável de 128 MB a 10 GB por execução.
 * Otimização: Reduzir tempo e memória ajustando código e alocação de memória.
 * Escalabilidade: Automática e sem servidor, sem necessidade de gerenciar infraestrutura.
 * Segurança: Funções executadas em ambientes isolados, com permissões granulares.
 * Integração: Com serviços AWS e de terceiros, como S3, DynamoDB, e API Gateway.
 * Balanceamento de Carga: Distribuição de tráfego entre várias funções Lambda.
 * Resiliência: Execuções redundantes e isoladas, com monitoramento e rastreamento.
 * API Gateway: Recursos que podem ser postos em serviços para criar, publicar, manter, monitorar, receber requisições e responder a APIs.
 * Validações de URI: No API Gateway, é possível validar parâmetros de caminho (path parameters), consultas (query strings) e headers para garantir que as requisições sigam o formato esperado antes de atingir o backend.
 * Validações de verbo HTTP: No API Gateway, é possível validar o verbo HTTP da requisição, garantindo que apenas métodos HTTP (GET, POST, PUT, DELETE, etc.) sejam aceitos.
 * Validações de corpo da requisição: No API Gateway, é possível validar o corpo da requisição, garantindo que os dados enviados sigam o formato esperado antes de atingir o backend.
 * Integração com outros recursos: No API Gateway, é possível integrar diretamente com outros serviços da AWS, como Lambda, DynamoDB, S3, e outros.
 * Monitoramento: Logs, métricas e rastreamento para depurar e otimizar funções.
 * Gráficos de Monitoramento: CloudWatch oferece métricas como invocações e erros.
 * Logs no CloudWatch: Registra detalhes de execução e erros de cada função Lambda.
 * Monitoramento com X-Ray: Ferramenta para rastrear e depurar execuções distribuídas.

## Sobre o uso do Docker

 * Docker: Plataforma de código aberto para desenvolvimento, envio e execução de aplicativos.
 * Dockerfile: Arquivo de configuração para criar uma imagem Docker personalizada.
 * Imagem: Modelo de um contêiner, criado a partir de um Dockerfile.
 * Contêiner: Ambiente isolado para executar aplicativos, criado a partir de uma imagem.
 * Build: Processo de criação de uma imagem Docker a partir de um Dockerfile.
 * Run: Comando para criar e executar um contêiner a partir de uma imagem.
 * Compose: Ferramenta para definir e executar aplicativos Docker com vários contêineres.
 * Compose file: Arquivo de configuração para definir serviços, redes e volumes em um aplicativo Docker.
 * Docker Hub: Registro de imagens Docker públicas e privadas, mantido pela Docker.
 * Docker Desktop: Aplicativo para Windows e macOS que fornece uma experiência de desenvolvimento Docker.
 * Docker Engine: Componente de tempo de execução para criar e executar contêineres Docker.
 * Artefatos: Pacotes de código, dependências e configurações necessários para implantar uma aplicação.
 * CDK x Docker: Docker para criar a imagem localmente na maquina para que o cdk possa fazer o processo de build e deploy na AWS pela imagem criada.

*Será adicionado mais componentes à infraestrutura. Fique ligado!
