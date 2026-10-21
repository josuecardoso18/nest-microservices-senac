import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('');
  await app.listen(3000);
  console.log('API Gateway rodando em http://localhost:3000');
}
bootstrap();
