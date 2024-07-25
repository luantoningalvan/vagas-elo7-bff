# BFF TESTE ELO7

Seja bem-vindo(a) ao BFF para o teste da elo7, ele foi feito em NestJS.

Ele está hospedado em uma VPS e possui um processo de deploy automatizado com o GitHub Actions

Para acessar a versão que está sendo consumida pela API acesse [esse link](https://bff-teste-elo7.luangalvan.dev).

O repositório do projeto front-end do projeto está [aqui](https://github.com/luantoningalvan/vagas-elo7)

## Como executar

- Clone o repositório
- Baixe as dependências com `yarn install`
- Rode em modo de desenvolvimento com `yarn start:dev`
- Para executar a build, rode `yarn build`

## Testes

- Foram feitos teste unitários para esse projeto utilizando Jest.
- Para rodar os testes utilize `yarn test` ou `yarn test:cov` para obter também o coverage

# Comentários

- Ficam como melhorias propostas a adição de logs (usaria o winston provavelmente) e também uma documentação das rotas com o Swagger
