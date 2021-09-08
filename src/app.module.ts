import { Module } from '@nestjs/common';
import { AppController, Test1Controller } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { Test2Module } from './test2/test2.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [Test2Module],
  controllers: [AppController,Test1Controller, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
