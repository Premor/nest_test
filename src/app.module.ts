import { Module } from '@nestjs/common';
import { AppController, Test1Controller } from './app.controller';
import { AppService } from './app.service';
import { Test2Module } from './test2/test2.module';
import { CatsModule } from './cats/cats.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cats } from './cats/cats.model';
import { GrpcModule } from './grpc/grpc.module';



@Module({
  imports: [Test2Module, CatsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '192.168.1.68',
      port: 5432,
      username: 'premor',
      password: 't123',
      database: 'test2',
      //models: [Cats],
      autoLoadModels: true,
      synchronize: true,
    }),
    GrpcModule,
  ],
  controllers: [AppController, Test1Controller,],
  providers: [AppService,],
})
export class AppModule { }
