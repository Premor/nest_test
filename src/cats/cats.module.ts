import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatsController } from './cats.controller';
import { Cats } from './cats.model';
import { CatsService } from './cats.service';

@Module({
    imports: [SequelizeModule.forFeature([Cats])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }