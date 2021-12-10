# Desafio Backend

Esta é uma avaliação de código destinada à você, engenheiro de software backend, candidato à uma vaga na **Skore**. O objetivo é entender um pouco mais do seu conhecimento, criatividade e de suas práticas de desenvolvimento.

Para a realização do desafio, crie o projeto em um repositório público no Github, e ao finalizar, nos envie o link.

Boa sorte :)

## :rocket: Tecnologias na Skore

Nós, da **Skore** somos *fanboys* de **TypeScript** e **Nest.js**, portanto, caso você venha a fazer parte de nossa equipe, a stack com a qual você trabalhará será majoritariamente essa:

- Typescript
- Nest.js
- Jest
- Postgres / MongoDB
- GraphQL

## :notebook: Desafio

Você deverá criar uma plataforma de gerenciamento de conteúdos, disponibilizando uma API para o time de front-end com os seguintes requisitos:

- Essa API não será pública e será utilizada por dois níveis de usuário: administrador e estudante;
- Os conteúdos deverão ser gerenciados (criação, atualização e deleção) **somente** por usuários administradores;
- Os usuários estudantes poderão **apenas** visualizar a listagem dos conteúdos disponibilizados na plataforma, e os detalhes específicos de cada um;
- Os conteúdos deverão ter obrigatoriamente nome, descrição, e tipo;
- Os tipos permitidos de conteúdo serão: vídeo, pdf e imagem;
- Será necessário contabilizar as visualizações **únicas** dos estudantes ao acessarem os detalhes do conteúdo;

Sinta-se livre para desenvolver esta API da melhor maneira que lhe convir.

**OBS:** Não é necessário criar um sistema de login, apenas uma solução que funcione como uma camada de validação por tokens estáticos.

## :fire: Dicas

- Aqui na **Skore** consideramos testes como parte essencial do trabalho de engenheiros, portanto encorajamos você à escrever testes de integração e unitários no desenvolvimento do desafio.

- Para a persistência dos dados, seria legal se você utilizasse um banco real, sem mock de dados. Fique a vontade para escolher o banco/tecnologia que preferir.

- Como dissemos anteriormente, somos *fanboys* de **Nest.js**, portanto gostaríamos que você utilizasse ao máximo as funcionalidades do framework.

- Logs são parte fundamental de nosso trabalho, portanto gostaríamos que você adicionasse alguns logs aonde achar necessário.

- Gostaríamos que o seu projeto tivesse soluções voltadas à performance. Mesmo que isto não seja aparente em uma pequena base de dados como é a proposta do desafio, queremos ver quais são suas ideias considerando escalabilidade à longo prazo.

## :shrug: Ficou com alguma dúvida?

Lidar com as incertezas é um valor muito importante dentro da **Skore**, e caso isso ocorra, pedimos que você tome as decisões necessárias e explique-as ao enviar o link do repositório contendo o projeto.
