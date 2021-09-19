import { IsNotEmpty } from 'class-validator';
import {Cat} from '../interfaces/cat.interface'

export class CreateCatDto implements Cat {
    @IsNotEmpty()
    name:Cat['name']; 
    @IsNotEmpty()
    age:Cat['age'];
    @IsNotEmpty()
    bloodType:Cat['bloodType'];
}