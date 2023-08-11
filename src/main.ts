import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TASKS } from './tasks/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.table(TASKS);
}
bootstrap();
