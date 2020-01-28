> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Template Docs

O objetivo inicial deste projeto é gerar um template geral para iniciar novos projetos React.js .

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

## GIT e Testes

### `git commit`

Por padrão sempre que for solicitado um commit o Linter irá executar o linter e tentar corrigir os erros, caso ele consiga corrigir todos os erros as alterações serão adicionadas ao commit atual, não sendo necessário escrever um novo commit.

### `git push`

Sempre que um Push for solicitado os o Jest tentará encontrar se os arquivos modificados estão relacionados a algum teste e então tentarão rodar os mesmos, caso contrário nenhum teste será necessário.

## Tipos de componentes

### Stateless Components

São componentes de apresentação que não possuem manipulação de Estado interno, recebem apenas "props" como parametros e apresentam o template. Preferencialmente deve-se utilizar [React.memo](https://pt-br.reactjs.org/docs/react-api.html#reactmemo) nestes componentes para evitar renderizações desnecessárias.

[melhor explicado aqui](https://devpleno.com/stateless-functional-component/)

### Stateful components

Possuem lógica de manipulação de estado autocontido, não dependendo exclusivamente do componente pai para manipular seu estado.

### Feature Components

Feature components são como "Stateful components" A grande diferença neste modelo é que estes componentes devem consumir um serviço próprio. Este tipo de componente é importante porque isola as responsabilidades, extraindo a lógica de manipulação de Estado do componente pai para dentro dele mesmo.

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
