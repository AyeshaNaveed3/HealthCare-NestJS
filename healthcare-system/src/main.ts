import { NestFactory } from '@nestjs/core';
import { AppModule } from './appp.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtMiddleware } from './auth/jwt.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(new JwtMiddleware()); 
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   
    forbidNonWhitelisted: true, 
  }));

  await app.listen(3001);
}
bootstrap();
