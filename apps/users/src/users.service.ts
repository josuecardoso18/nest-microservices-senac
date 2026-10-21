import { Injectable } from '@nestjs/common';

type User = { id: number; name: string };

@Injectable()
export class UsersService {
  // Lista de exemplo para testar o fluxo sem configurar banco de dados.
  private readonly users: User[] = [
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Carlos' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
