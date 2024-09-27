# Bem-vindo ao projeto CDK em TypeScript

Este é um projeto para desenvolvimento CDK com TypeScript.

## Sobre o projeto:

O projeto consiste no backend de uma aplicação de e-commerce com uma API RESTful que permite a criação, leitura, atualização e exclusão de produtos.  A aplicação é 100% em cloud, tendo toda sua infraestrutura criada em AWS CloudFormation com AWS CDK. A aplicação é composta por uma função Lambda que processa as requisições HTTP, um banco de dados DynamoDB para armazenar os produtos, e uma API Gateway para expor a função Lambda na internet.

## Sobre as tecnologias utilizadas:

O ambiente de desenvolvimento utilizado no projeto foi preparado com as seguintes ferramentas e tecnologias:

* Node.js e NPM:        - Utilizados para gerenciar pacotes e dependências do projeto, garantindo que a aplicação possa ser construída e implantada corretamente.
* AWS CLI:              - Ferramenta de linha de comando da AWS para gerenciar e monitorar recursos na nuvem, sendo essencial para o deploy e interação com os serviços AWS.
* AWS CDK (Cloud Development Kit): - Utilizado para definir e provisionar a infraestrutura da aplicação por meio de código. A versão do CDK foi instalada e verificada para garantir a compatibilidade com o projeto.
* Visual Studio Code:   - IDE utilizada para o desenvolvimento do código da aplicação e infraestrutura.
* Postman:              - Aplicativo utilizado para testar e validar as requisições HTTP, tanto localmente quanto na AWS.
* Docker Desktop:       - Ferramenta utilizada para compilar e testar localmente as funções Lambda antes de implantá-las na AWS.

## Sobre alguns conceitos importantes do AWS:

 * AWS: Amazon Web Services, plataforma de serviços em nuvem da Amazon.
 * CDK: Cloud Development Kit, framework para definir e provisionar infraestrutura como código.
 * Bootstrap: Configuração inicial da conta AWS para implantar recursos com o CDK.
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
 * Lambda Layer: Camada de código compartilhada entre várias funções Lambda.
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
 * Logs group: Agrupamento de logs para facilitar a busca e análise de registros.
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

 ## Sobre o uso do Postman

 * Postman: Ferramenta para testar e validar APIs, com suporte a requisições HTTP e WebSocket.
 * Requisição: Ação de solicitar dados de um servidor, com métodos HTTP como GET, POST, PUT, DELETE.
 * GET: Por hora apenas, caso seja enviado uma requisição POST o API Gateway irá retornar um erro 405 Method Not Allowed com a mensagem: "Error".

 *obs: para testar a API, é necessário criar uma coleção no Postman com as requisições HTTP para a API Gateway.
 *obs: utilizado URL gerado pelo deploy da API Gateway para testar as requisições HTTP.
        "/": rota principal(root) da API
        "/products": resposta da função Lambda criada (Configurada na função de produtos) em json.

 ## Sobre o uso do DynamoDB

 * DynamoDB: Serviço de banco de dados NoSQL da AWS, totalmente gerenciado e escalável (chave e valor).
 * Tabela: Coleção de itens, com chaves primárias e secundárias, armazenada no DynamoDB.
 * Item: Registro na tabela, com atributos e valores, identificado por uma chave primária.
 * Chave primária: Atributo único que identifica cada item na tabela, podendo ser simples ou composta.
 * Chave de partição: Parte da chave primária que determina a partição onde o item será armazenado.
 * Chave de classificação: Parte da chave primária que determina a ordenação dos itens na partição.
 * Índice: Estrutura secundária para consultar e ordenar itens por atributos diferentes da chave primária.
 * Índice global: Índice que abrange toda a tabela, permitindo consultas por atributos não-chave.
 * Índice local: Índice que abrange apenas uma partição, permitindo consultas por atributos não-chave.
 * Capacidade: Configuração de leitura e gravação para a tabela, com provisionamento ou sob demanda.
 * Partições: Divisões lógicas da tabela para distribuir e escalonar a capacidade de leitura e gravação.
 * Escalabilidade: Automática e sem servidor, com ajuste dinâmico da capacidade conforme a demanda.
 * Consistência: Eventual ou forte, para leituras e gravações com garantia de integridade dos dados.
 * Acesso: Por meio de APIs, SDKs e consoles da AWS, com suporte a transações e ACID.
 * Monitoramento: Métricas e alarmes para monitorar a capacidade, desempenho e custo da tabela.
 * Backup: Cópias de segurança automáticas e manuais para proteger os dados da tabela.
 * Restauração: Recuperação de itens e tabelas excluídas, com histórico de alterações.
 * Segurança: Criptografia, controle de acesso e auditoria para proteger os dados da tabela.
 * Auditoria: Registros de eventos e atividades para rastrear e monitorar o acesso aos dados.
 * Desempenho: Otimização de consultas, índices e atributos para melhorar a velocidade de acesso.
 * Escrita: Operações de gravação atômicas, condicionais e em lote para manter a consistência.
 * Leitura: Operações de consulta, varredura e projeção para recuperar e visualizar os dados.
 * Regras de negócio: Validações, triggers e transações para garantir a integridade e consistência dos dados.

  *obs: o dynamoDB permite com itens diferentes, com atributos diferentes, e com valores diferentes, porém com a mesma chave primária.

## Alguns comandos importantes:

 Para uso do cdk estou utilizando acesso por `sso`:
 * `aws sso login --profile <nome_profile>`

  *obs: poderia ser por usuário `iam` com as respectivas permissões

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

 Foram também instaladas as seguintes dependências:
 
 * `npm install aws-sdk @types/aws-lambda uuid @types/uuid --save-dev`

  *obs: o pacote aws-sdk é necessário para interagir com os serviços da AWS, enquanto o uuid é utilizado para gerar identificadores únicos para os registros do DynamoDB.

 Gera o template CloudFormation do código TypeScript:

 * `cdk synth`

 Prepara o ambiente da AWS para receber os recursos (apenas na primeira execução). cdk bootstrap: 

 * `cdk bootstrap aws://<idAccount>/<region> --profile <nome_profile>`

    *obs: Certificar de que o Docker Desktop está ativo e configurado para rodar containers Linux, pois o CDK utiliza containers para compilar e executar as funções Lambda.

 Faz o deploy da infraestrutura para a conta AWS.cdk deploy: 

 * `cdk deploy --all --profile <nome_profile> `

  *obs: o arquivo `cdk.json` informa ao CDK Toolkit como executar sua aplicação.

 Lista todas as stacks gerenciadas por esta aplicação:

 * `cdk list` 
 
 Destrói todos os recursos criados (Ocional):

 * `cdk destroy --all --profile <nome_profile> ` 

  *obs: o comando `cdk destroy` remove todos os recursos criados pela aplicação, exceto o bucket S3 e os logs do CloudWatch. Devem ser removidos manualmente.	

*Será adicionado mais componentes à infraestrutura. Fique ligado!
