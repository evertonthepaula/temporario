# React.js Bootstrap

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Template Docs

O objetivo inicial deste projeto é gerar um template geral para iniciar novos projetos React.js .

## O que falta Configurar

- Redux/Sagas
- Jest

## Available Scripts

In the project directory, you can run:

### `npm run api:fake`

Roda a uma Api para disponibilizar um "mock de dados" na porta 3004.

### `npm run lint`

Roda o linter de linter do javacript

### `npm run lint:fix`

Tenta fixar os erros apresentados pelo Linter do Javascript e mostra os erros que não conseguiu corrigir.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run sonar` ou `npm run sonar:win`

Roda o sonarQube para plataforma windows.

## GIT

### `git commit`

Por padrão sempre que for solicitado um commit o Linter irá executar o linter e tentar corrigir os erros, caso ele consiga corrigir todos os erros as alterações serão adicionadas ao commit atual, não sendo necessário escrever um novo commit.

### `git push`

Sempre que um Push for solicitado os o Jest tentará encontrar se os arquivos modificados estão relacionados a algum teste e então tentarão rodar os mesmos, caso contrário nenhum teste será necessário.

## Qualidade de Código

### Linter

### Testes unitários

### SonarQube

SonarQube irá rodar em [localhost:9999](localhost:9999);

**Login**: admin
**Login**: bitnami

#### Instalando

Para baixar manualmente acesse e execute os comandos o passo a passo no Medium [Análise de código com SonarQube + Docker + .NET Core.](https://slack-redir.net/link?url=https%3A%2F%2Fmedium.com%2F%40thiagoloureiro%2Fan%25C3%25A1lise-de-c%25C3%25B3digo-com-sonarqube-docker-net-core-aad17147486a)

##### Docker local

Você pode tentar rodar a configuração do Docker que está junto ao projeto,

`docker-compose -f .\docker\compose\docker-compose.yml up -d`

**Obs** : Será necessário modificar o docker-compose para compartilhar os volumes locais da instalação do sonarscanner.

##### Configurando

Você precisará configurar o [sonarscanner](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/). Baixe o pacote descompacte e configure a variável de ambiente "PATH" para apontar para o executável ".bin" do pacote.

Agora acesse [localhost:9999](localhost:9999) para concluir a configuração.

##### Executando

Você deve primeiramente adicionar sua chave de login(Token) e projectKey nos arquivos sonar.bat e sonar.sh;

Para executar SonarQube execute `npm run sonar`(bash) ou `npm run sonar:win`(win terminal).

## Tipos de componentes

### Stateless Components

São componentes de apresentação que não possuem manipulação de Estado interno, recebem apenas "props" como parametros e apresentam o template. Preferencialmente deve-se utilizar [React.memo](https://pt-br.reactjs.org/docs/react-api.html#reactmemo) nestes componentes para evitar renderizações desnecessárias.

[melhor explicado aqui](https://devpleno.com/stateless-functional-component/)

### Stateful components

Possuem lógica de manipulação de estado autocontido, não dependendo exclusivamente do componente pai para manipular seu estado.

### Feature Components

Feature components são como "Stateful components" A grande diferença neste modelo é que estes componentes devem consumir um serviço próprio e escopo fechado não dependendo do seu wrapper para definir seu estado, e também não [elevando o estado](https://pt-br.reactjs.org/docs/lifting-state-up.html) para o componente pai. Este tipo de componente é importante porque isola as responsabilidades, extraindo a lógica de manipulação de Estado do componente pai para dentro dele mesmo.

### Page components

Estes componentes são os únicos que podem ser carregados pelas Rotas e são responsáveis por carregar e apresentar outros componentes. Esperasse que pages tenham pouca ou nenhuma lógica atribuida.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
