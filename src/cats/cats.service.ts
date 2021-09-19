import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cats } from './cats.model';
import { Cat } from './interfaces/cat.interface';


@Injectable()
export class CatsService {
    // private readonly cats: Cat[] = [];
    constructor(
        @InjectModel(Cats)
        private catModel: typeof Cats,
      ) {}
    create(cat: Cat) {
        console.log(cat)
        this.catModel.create(cat);
    }

    async findAll() {
        return this.catModel.findAll();
    }

    async findOne(name:string){
        return this.catModel.findOne({ where: {name} });
    }

    async delete(id:number){
        await this.catModel.destroy({where:{id}});
    }
}
