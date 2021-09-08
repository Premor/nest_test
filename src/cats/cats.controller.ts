import { Controller, Get, Req, Param, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'
import { CreateCatDto } from './dto/create-cats.dto'

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':name')
    returnOne(@Param('name') name: string): string {
        return `Cat with name ${name}`;
    }

    @Post()
    async createCat(@Body() catDto: CreateCatDto) {
        if ( catDto.name === undefined 
          || catDto.age === undefined
          || catDto.bloodType === undefined
           )
        {
            throw "error";
        }
        this.catsService.create(catDto);
    }
}


