import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);

  await app.listen(port, () => {
    console.log(`Server has been started on http://localhost:${port}`);
  });
}

bootstrap();