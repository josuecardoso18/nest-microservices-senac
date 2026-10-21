# NestJS Microservices — Tutorial Senac

Exemplo didático com duas aplicações:
- `api-gateway`: API HTTP na porta 3000
- `users`: microserviço TCP na porta 3001

## Requisitos
- Node.js LTS e npm
- PostgreSQL instalado e em execução (somente para a versão com banco)
- Nest CLI (opcional)

## Instalar
```bash
npm install
```

## Executar
Em dois terminais, depois de instalar:
```bash
npm run start:gateway
```
```bash
npm run start:users
```

Teste:
- `GET http://localhost:3000/users`
- `GET http://localhost:3000/users/1`

O exemplo inicial usa uma lista em memória para funcionar sem configurar banco.
A pasta `prisma/` contém um schema de referência para a etapa posterior com PostgreSQL.
Para usar o banco de verdade, configure `DATABASE_URL`, instale/configure Prisma e substitua o service em memória por PrismaService.
