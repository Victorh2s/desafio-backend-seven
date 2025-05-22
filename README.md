# Desafio Backend Seven

## 🚀 Passos para execução local

1. **Clone o projeto**:
   ```bash
   git clone git@github.com:Victorh2s/desafio-backend-seven.git
   ```

2. **Configure o ambiente**:
   - Renomeie o arquivo `.env.example` para `.env`
   - Não é necessário alterar as variáveis de ambiente

3. **Execute com Docker**:
    Na primeira execução do Docker Compose, o MySQL pode levar alguns minutos para ficar totalmente operacional. Isso é normal.
   ```bash
   docker compose up --build
   ```

## 📡 Exemplos de Requisições

Coleção Postman disponível no projeto.
Observação: Substitua `SEU_TOKEN` pelos tokens JWT gerados durante as operações de login.

### 1. Teste de conexão
```bash
curl --location 'http://localhost:3000/'
```

### 2. Registrar Usuário
```bash
curl --location 'http://localhost:3000/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Jhon",
    "email":"jhonclient@example.com",
    "password":"Senha@12345",
    "role":"client",
    "priority": false,
    "active":true,
    "phone":"11999999999"
}'
```

### 3. Login
```bash
curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"jhonclient@example.com",
    "password":"Senha@12345"
}'
```

### 4. Registrar Disponibilidade (Especialista)
```bash
curl --location 'http://localhost:3000/specialist/register-availability' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer SEU_TOKEN' \
--data '{
    "specialty": "nutrition",
    "daily_limit": 8,
    "min_interval_minutes": 30,
    "availability": {
        "monday": ["08:00", "10:00"],
        "tuesday": ["14:00", "16:00"],
        "wednesday": ["15:00", "17:00", "23:00"],
        "thursday": ["01:55", "01:56", "02:00"],
        "friday": ["02:06", "02:08", "02:10"]
    }
}'
```

### 5. Visualizar Horários Disponíveis (Cliente)
```bash
curl --location 'http://localhost:3000/appointments/slots?date=2025-05-26&specialty=nutrition' \
--header 'Authorization: Bearer SEU_TOKEN'
```

### 6. Criar Agendamento (Cliente)
```bash
curl --location 'http://localhost:3000/appointments/create' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer SEU_TOKEN' \
--data '{
    "specialistId": "9c2158ea-4e1a-436f-9a29-643b1f465d65",
    "date": "2025-05-23",
    "time":"02:08"
}'
```

### 7. Visualizar Agendamentos (Cliente)
```bash
curl --location 'http://localhost:3000/appointments/client' \
--header 'Authorization: Bearer SEU_TOKEN'
```

### 8. Visualizar Agendamentos (Especialista)
```bash
curl --location 'http://localhost:3000/appointments/specialist' \
--header 'Authorization: Bearer SEU_TOKEN'
```

### 9. Cancelar Agendamento
```bash
curl --location --request DELETE 'http://localhost:3000/appointments/b1733452-b4a9-4373-863b-4c1521c54fe6' \
--header 'Authorization: Bearer SEU_TOKEN'
```

### 10. Atualizar Status (Admin/Especialista)
```bash
curl --location --request PATCH 'http://localhost:3000/appointments/b1733452-b4a9-4373-863b-4c1521c54fe6' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer SEU_TOKEN' \
--data '{
    "status": "expired"
}'
```

## 🔄 Fluxo Recomendado
1. Crie um usuário especialista
2. Faça login como especialista
3. Defina os horários disponíveis usando a rota de registro de disponibilidade
4. Siga com o fluxo do usuário cliente

## 🛠 Decisões Técnicas

### Arquitetura
- **Container Docker** com MySQL incluso no compose
- **Eslint** para padronização de código
- **Husky/GitHub Workflow** para validação pré e pós push
- Estrutura monolítica com sistema de módulos

### Tecnologias
- **NodeCron** para agendamento/notificações
- **Prisma** como ORM
- **Zod** para validação de inputs
- Testes unitários em todos os services

### Alternativas Consideradas
- Para sistemas mais complexos, **Bull com Redis** seria preferível para melhor escalabilidade

## 📚 Regras de Negócio Implementadas

### Módulos Principais
1. **Auth**: Responsável por criação de usuários e login
2. **User**: Subpastas separadas por role (especialista/cliente)
3. **Appointment**: Todas as operações de agendamento:
   - Criação
   - Visualização (cliente/especialista)
   - Atualização  (admin/especialista)
   - Cancelamento  (client)

### Funcionalidades Específicas
- Especialistas podem definir disponibilidade de horários
- Clientes podem visualizar slots disponíveis
- Sistema de prioridade para agendamentos
- Notificações automáticas via NodeCron

