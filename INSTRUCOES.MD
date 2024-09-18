# Instruções para Rodar o Projeto

## Descrição do Projeto

Este projeto é uma API desenvolvida para gerenciar autenticação, autorização e permissões de usuários. Ela foi construída utilizando **Node.js**, **Fastify**, **JWT**, **Prisma**, **bcrypt**, e **Zod**.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js** (versão 16 ou superior)
- **PostgreSQL** (ou outro banco de dados configurado no Prisma)
- **npm** ou **pnpm**

## Passo a Passo para Rodar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/DevSolto/Desafio-Node.js.git
cd Desafio-Node.js
```

### 2. Instale as Dependências

Recomenda-se utilizar o **pnpm** para gerenciar as dependências:

```bash
pnpm install
```

### 3. Configurar o Banco de Dados

Certifique-se de que você tem um banco de dados PostgreSQL rodando e crie um banco para o projeto. Após isso, configure a variável de ambiente `DATABASE_URL` com sua string de conexão no formato:

```bash
DATABASE_URL=postgresql://<usuario>:<senha>@<host>:<porta>/<database>
```

### 4. Migrar o Banco de Dados

A API usa **Prisma** como ORM. Para criar as tabelas necessárias no banco de dados, execute o comando abaixo:

```bash
pnpm run migrate
```

Isso vai aplicar as migrações necessárias e configurar o banco de dados corretamente.

### 5. Variáveis de Ambiente

Além do `DATABASE_URL`, crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:

```bash
JWT_SECRET=<sua-chave-secreta-jwt>
PORT=3000
```

- **JWT_SECRET**: Chave secreta para assinar os tokens JWT.

### 6. Iniciar o Servidor

Após configurar o banco de dados e as variáveis de ambiente, inicie o servidor localmente com o comando:

```bash
pnpm run dev
```

Isso iniciará o servidor na URL `http://localhost:3000`.

## Testando a API

### 1. Login de Usuário

Utilize a rota `/api/login` para fazer o login de um usuário existente. Um token JWT será retornado.

Exemplo de requisição:

```json
POST /api/login
{
  "cpf": "793.431.150-83",
  "password": "senhapadrao"
}
```

### 2. Acessar Rotas Protegidas

Use o token JWT retornado para acessar rotas que requerem autenticação, incluindo as rotas de criação de permissões e gerenciamento de usuários. Inclua o token no cabeçalho `Authorization`:

```bash
Authorization: Bearer <token-jwt>
```

### 3. Adicionar Permissões

Somente administradores podem adicionar permissões para usuários utilizando a rota `/api/users/permissions`.

Exemplo de requisição:

```json
POST /api/users/permissions
{
  "userId": "cm159sosc0000ppqgr5t4gnlp",
  "permissionId": "cm159sosc0000ppqgr5t4gnlp"
}
```

## Documentação da API

A documentação completa da API foi gerada no formato **OpenAPI**. Você pode importá-la no **Postman** para explorar e testar todas as rotas disponíveis.
Documentação do [Swagger](https://app.swaggerhub.com/apis-docs/SOUTOSANTIAGO/DesafioNode/1.0.0#/)

## Considerações Finais

Sinta-se à vontade para explorar a API, adicionar novos usuários e testar as permissões. Se encontrar algum problema, verifique os logs ou abra uma issue no repositório.
