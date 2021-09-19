import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GrpcModule } from './grpc/grpc.module'
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
const grpcApp = await NestFactory.createMicroservice<MicroserviceOptions>(GrpcModule, {
  transport: Transport.GRPC,
  options: {
    package: 'grpc',
    protoPath: join(__dirname, 'grpc/test.proto'),
    url:'localhost:5000'
  },
});

  app.useGlobalPipes(new ValidationPipe());
  await grpcApp.listen();
  await app.listen(3000);
  
}
bootstrap();
