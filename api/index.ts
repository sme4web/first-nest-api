// api/index.ts
import { createServer } from '@vercel/node';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

export default async (req: any, res: any) => {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const server = createServer(app.getHttpAdapter().getInstance());
  return server(req, res);
};