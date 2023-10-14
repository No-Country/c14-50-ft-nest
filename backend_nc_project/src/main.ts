import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, { cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  } });

  const configservice = app.get<ConfigService>(ConfigService);
  const port = configservice.get('PORT');
  
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  
  const config = new DocumentBuilder().setTitle('NC Project API').setDescription('This is an API for a NC Project').setVersion('1.0.0').addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
