import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE')
    private readonly usersClient: ClientProxy,
  ) {}

  @Get()
  findAll(): Observable<unknown> {
    return this.usersClient.send('users.findAll', {});
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<unknown> {
    return this.usersClient.send('users.findOne', id);
  }
}
