# Desafio Backend

Agradecemos muito o seu interesse em fazer parte do nosso time. :heart:

Para prosseguirmos, gostaríamos de desafiar você a realizar esse pequeno projeto para que possamos entender melhor como que você estrutura o seu código e quais as habilidades que possui hoje em dia.

## :detective: O que iremos avaliar?

Antes de entrarmos para a parte mais técnica, gostaríamos de dizer que aqui na Learning.Rocks valorizamos muita a pró-atividade. Aqui temos a liberdade de sugerir mudanças técnicas e de produto nos projetos em que trabalhamos, e para deixar esse desafio o mais parecido com o nosso ambiente de trabalho, gostaríamos de ressaltar que você tem toda a liberdade de criação dentro dele.

## :rocket: Tecnologias na Learning.Rocks

Nós, da **Learning.Rocks**, usamos a seguinte stack nos projetos:

- Typescript
- [Nest.js](https://nestjs.com)
- Jest
- Postgres / MongoDB
- GraphQL

## :notebook: Desafio

Você deverá criar uma plataforma de gerenciamento e visualização de conteúdos, disponibilizando uma API para o time de front-end com os seguintes requisitos:

- Essa API não será pública e será utilizada por dois níveis de usuário: administrador e estudante;
- Os conteúdos deverão ser gerenciados (criação, atualização e deleção) **somente** por usuários administradores;
- Os usuários estudantes poderão **apenas** visualizar a listagem dos conteúdos disponibilizados na plataforma, e os detalhes específicos de cada um;
- Os conteúdos deverão ter obrigatoriamente nome, descrição, e tipo;
- Deverão ser permitidas apenas três strings no tipo do conteúdo: `video`, `pdf` ou `image`;
- Será necessário contabilizar as visualizações **únicas** dos estudantes ao acessarem os detalhes do conteúdo;

Sinta-se livre para desenvolver esta API da melhor maneira que lhe convir.

**IMPORTANTE:** Não é necessário criar um sistema de login ou cadastro/gerenciamento de usuários, apenas uma solução que funcione como uma camada de validação por tokens estáticos.

## :fire: Dicas

- Aqui na **Learning.Rocks** consideramos testes como parte essencial do trabalho de engenheiros, portanto encorajamos você à escrever testes de integração e unitários no desenvolvimento do desafio.

- Para a persistência dos dados, seria legal se você utilizasse um banco real, sem mock de dados. Fique a vontade para escolher o banco/tecnologia que preferir.

- Gostaríamos que o seu projeto tivesse soluções voltadas à performance. Mesmo que isto não seja aparente em uma pequena base de dados como é a proposta do desafio, queremos ver quais são suas ideias considerando escalabilidade à longo prazo.

## :shrug: Ficou com alguma dúvida?

Lidar com as incertezas é um valor muito importante dentro da **Learning.Rocks**, e caso isso ocorra, pedimos que você tome as decisões necessárias e explique-as ao nos enviar o link do repositório.

## :tada: Tudo pronto... E agora?!

Após terminar o seu teste, pedimos que caso ainda não tenha feito, crie um repositório no GitHub e nos envie o link dele, caso não se sinta a vontade de deixá-lo público, nos envie por email.
