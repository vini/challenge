## Setup do projeto de backend

### Pré-requisitos

O que você precisa para configurar o projeto:

- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/) `>=22.0.0` (Instale usando [NVM](https://github.com/nvm-sh/nvm))
- [Docker Compose](https://docs.docker.com/compose/)

### Setup

1. **Instale o Docker e o Docker Compose**, caso ainda não tenha.
2. Suba os serviços necessários (PostgreSQL e Redis) com:
   ```bash
   docker-compose up -d
   ```
3. Instale as dependências do projeto:
   ```bash
   nvm use && npm install
   ```
4. Configure o banco de dados:
   ```bash
   npm run db:migrate && npm run db:seed
   ```
5. Inicie o servidor:
   ```bash
   npm run start:dev
   ```
6. Acesse o **Playground do GraphQL**:
   - 👉 [http://localhost:3000/graphql](http://localhost:3000/graphql)

### Tests

Para rodar os testes:

```bash
npm run test
```

### Migrations

Caso precise criar novas migrations, utilize o comando:

```bash
npm run db:create_migration --name=create-xpto-table
```

### Notas do teste (Feito em 23/03/2025)

### 🔍 O que será avaliado?

✅ **Funcionalidade** – O provisionador de conteúdos está funcionando corretamente?
Para fazer consulta de provision graphql playground sim, pode seguir esse exemplo:

```graphql
query {
  provision(content_id: "CONTENT_ID_AQUI") {
    id,
    title,
    description,
    url,
    cover,
    type,
    total_likes
  }
}
```

✅ **Qualidade do Código** – O código está organizado, reutilizável e fácil de manter?
Não necessariamente, poderia ser adicionado outros padrões de desenvolvimento, tais como:
Clean Arch, MVC, Design Patterns etc, para não atrasar a entrega, resolvi não trocar essa arch.

✅ **Escalabilidade** – O sistema suporta novos tipos de conteúdos facilmente?
Como foi pedido adicionar um novo tipo de suporte para conteudo, no caso tipo texto,
decidi refatorar o tipo PDF para tipo Texto, e adicionei os formatos 9 formatos aceitos
além do PDF: doc/docx, rtf, md, xml, json, csv, txt.

✅ **Segurança** – A falha crítica foi corrigida?
Identifiquei primeiramente ao rodar o npm install, 2 pacotes marcados como vulneraveis,
então rodei um npm audit fix para corrigir as vulnerabilidades sem quebrar as dependencias, e também rodei um npm ci para reinstalar todos os pacotes, considerando o package-lock.json como referencia.

Também identifiquei uma falha grave de segurança, o .env não estava no .gitignore, e para completar a token estava exposta, então adicionei ao .gitignore, criei um .env.example com valor vazio, subi, e deletei o .env e depois comitei, pode observar que não está mais exposto no repo, certos tipos de informações devem ser trocadas por outros canais.

✅ **Testes** – Testes unitários (e/ou de integração) foram implementados corretamente? O projeto possuí uma coberta minima de 80%.

Foi feito algumas adaptações nos testes, em vez de replicar para cada formato, resolvi fazer um for em cima dos formatos adicionados de arquivo do tipo texto, porém o mock está apenas um arquivo do tipo .pdf.

✅ **Documentação** – O README do seu projeto tem todas as informações necessárias?

