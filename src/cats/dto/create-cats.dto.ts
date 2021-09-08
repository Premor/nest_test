import {Cat} from '../interfaces/cat.interface'

export class CreateCatDto implements Cat {
    name:Cat['name']; 
    age:Cat['age'];
    bloodType:Cat['bloodType'];
}