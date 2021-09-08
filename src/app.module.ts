import { Module } from '@nestjs/common';
import { AppController, Test1Controller } from './app.controller';
import { AppService } from './app.service';
import { Test2Module } from './test2/test2.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [Test2Module, CatsModule],
  controllers: [AppController,Test1Controller,],
  providers: [AppService,],
})
export class AppModule {}
