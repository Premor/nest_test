import { Controller, Get, Param, Post, Body, HttpException, HttpStatus, BadRequestException, Delete } from '@nestjs/common';
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
    returnOne(@Param('name') name: string): Promise<Cat> {
        return this.catsService.findOne(name);
    }

    @Post()
    async createCat(@Body() catDto: CreateCatDto) {
        // if ( catDto.name === undefined 
        //   || catDto.age === undefined
        //   || catDto.bloodType === undefined
        //    )
        // {
        //     throw new BadRequestException()
        // }
        this.catsService.create(catDto);
    }

    @Delete()
    async deleteById(@Body('id') id:number){
        this.catsService.delete(id);
    }
}


