# Plano de Sprints

## Sprint 1: Configuração e Autenticação Básica

**Objetivo:** Estabelecer a base do projeto, incluindo o setup inicial e a funcionalidade de login com autenticação.

### Tarefas:

#### Setup do Projeto:

- [x] Criar o repositório e a branch com seu nome.
- [x] Configurar o ambiente de desenvolvimento com Node.js e bibliotecas principais (Express, bcrypt, JWT).
- [ ] Preparar o arquivo `INSTRUCOES.md` com passos iniciais para rodar o projeto.

#### Criação de Usuários e Autenticação:

- [x] Definir o modelo de usuário com CPF, senha, role, e permissões.
- [x] Implementar a rota de registro de usuário para criar novos usuários.
- [x] Implementar a funcionalidade de login (rota que recebe CPF e senha) e geração de token JWT com dados do usuário, role e permissões.
- [x] Documentar as rotas no Postman.

## Sprint 2: Autorização e Gestão de Permissões

**Objetivo:** Implementar a lógica de autorização e gestão de permissões conforme a role do usuário.

### Tarefas:

#### Implementar Autorização:

- [x] Criar middleware para validar o token JWT e verificar permissões de acesso.
- [x] Implementar a rota para adicionar permissão (somente para administradores).
- [x] Implementar a rota para remover permissão (somente para administradores).
- [x] Garantir que vendedores não tenham acesso às rotas restritas.

#### Documentação no Postman:

- [ ] Atualizar a documentação das rotas no Postman.
- [ ] Exportar o JSON do Postman para o projeto.

## Sprint 3: Refatoração, Testes e Documentação Final

**Objetivo:** Melhorar a qualidade do código, adicionar testes e finalizar a documentação.

### Tarefas:

#### Refatoração e Melhoria de Código:

- [ ] Revisar o código para melhorar a clareza e manutenabilidade.
- [ ] Implementar padrões de projeto (se aplicável) para simplificar a lógica.

#### Testes:

- [ ] Implementar testes unitários para funções críticas (ex: autenticação, autorização).
- [ ] Implementar testes de integração para rotas principais.

#### Documentação e Finalização:

- [ ] Completar o arquivo `INSTRUCOES.md` com instruções detalhadas para rodar a aplicação.
- [ ] Adicionar explicações sobre decisões técnicas e escolhas de bibliotecas.
- [ ] Garantir que todos os endpoints estejam documentados e funcionando conforme especificado.
