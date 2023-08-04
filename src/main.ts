import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 import * as cookieParser from 'cookie-parser';

// var cookieParser = require('cookie-signature')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
   app.enableCors({credentials:true,origin:'http://localhost:4200'})
  await app.listen(3000);
}
bootstrap();
