# Desafio técnico de backend

## 📌 Contexto

A Plataforma LXM da Learning Rocks é uma solução de educação corporativa desenvolvida para potencializar o aprendizado e a performance dos colaboradores dentro das empresas. Nosso modelo B2B atende organizações que desejam estruturar e gerenciar treinamentos obrigatórios, trilhas de conhecimento e capacitações personalizadas.

Dentro de cada empresa, há dois tipos principais de usuários:

**Administradores**: Responsáveis por gerenciar conteúdos, acompanhar métricas e organizar treinamentos.

**Estudantes**: Usuários finais que consomem os conteúdos educacionais disponibilizados na plataforma.

### O Desafio

Na última semana do ano, um desenvolvedor precisou entregar rapidamente uma funcionalidade para permitir que administradores realizassem importações em massa de conteúdos de treinamento via CSV. Para cumprir o prazo apertado, decidimos fazer uma v0 mais rápida, com escopo reduzido. E reduzindo o tamanho da entrega, o código ficou com alguns problemas e débitos tecnicos.

## 🎯 Objetivo

Agora, sua missão é evoluir essa funcionalidade, corrigindo suas falhas e implementando uma nova feature que permita os **administradores** acompanharem o status das importações. 🚀

Considere que, no desafio estamos usando uma arquitetura multitenancy, onde os recursos são compartilhados entre empresas, mas separados logicamente para garantir segurança e personalização para cada cliente.

### 📊 Informações úteis para a consulta:

- Total de linhas processadas;
- Quantidade de linhas com erro;
- As linhas com erro e os respectivos problemas;
- Status geral da importação (**pendente**, **processado**, **erro**, etc.).

## ⚠️ Desafios ao evoluir a feature

Lidar com **códigos problemáticos** faz parte dos desafios diários em engenharia de software. O código atual possui os seguintes problemas conhecidos:

- **2 falhas críticas de segurança** (você consegue identificar?);
<!-- - **Uploads simultâneos podem gerar duplicações**;
- **Uso ineficiente do banco de dados**;
- **Erros não tratados corretamente**;
- **Filas de processamento (Bull/Redis) ineficientes**. -->

## ⚙️ Setup do projeto

### 🚀 Como rodar o projeto

1. **Instale o Docker e o Docker Compose** caso ainda não tenha.
2. Rode o seguinte comando na raiz do projeto para subir o PostgreSQL e o Redis:
   ```bash
   docker-compose up -d
   ```
3. Instale as dependências do projeto:
   ```bash
   nvm use && npm install
   ```
4. Inicie o servidor:
   ```bash
   npm run start:dev
   ```
5. Acesse o **Playground do GraphQL** em:
   - 👉 [http://localhost:3000/graphql](http://localhost:3000/graphql)
6. Para importar um arquivo CSV via **cURL**, execute:
   ```bash
   curl -X POST http://localhost:3000/graphql \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMThjMzdjZTItY2QzNC00MzA1LTljYTQtYzE1ZmM3MzZiZWFjIn0.pqWRiyQuvWRVQgIzKvQ85RrBwSF5KxeGZrkFvKt2CG8" \
     -d "$(jq -n --arg csvData \"$(cat test/contents.csv | sed ':a;N;$!ba;s/\n/\\n/g')\" '{query: \"mutation($csvData: String!) { importCsv(csvData: $csvData) }\", variables: { csvData: $csvData }}')"
   ```

### 📦 Migrations

Caso precise criar novas migrations, utilize o seguinte comando:

```bash
npm run db:create_migration --name=create-xpto-table
```

---

🔥 **Boa sorte no desafio!** 🚀

######## TIRAR DAQUI ########

## 📝 Avaliação

### 🚨 Problemas Existentes no Código

- **Uso ineficiente de filas** _(Bull/Redis tem prioridades aleatórias)_;
- **Falta de tratamento de erros individualmente**, o que pode interromper todo o processamento;
- **Inserções no banco de dados não otimizadas** (múltiplas queries em vez de batch inserts);
- **Risco de SQL Injection** no código legado;
- **Código legado de difícil manutenção**, necessitando refatoração para melhorar a arquitetura.

### ✅ Critérios de Avaliação

1️⃣ **Correção funcional** → A nova feature foi implementada corretamente?

2️⃣ **Qualidade do código** → O candidato refatorou o código legado para facilitar a manutenção?

3️⃣ **Escalabilidade** → A solução funciona bem para **grandes volumes de dados**?

4️⃣ **Segurança** → Foram mitigados riscos como **SQL Injection e entradas inválidas**?

5️⃣ **Resiliência** → Os erros são tratados corretamente sem comprometer o processamento?

6️⃣ **Performance** → A importação é eficiente e evita uso excessivo de memória?
