import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { Cats } from './cats.model';
import { CatsService } from './cats.service';
import { Cat, BloodType } from './interfaces/cat.interface';


describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    let mockModel = {};
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService,
        {
          provide:getModelToken(Cats),
          useValue:mockModel,
        }
      ],
    })
    .compile();

    service = await module.resolve<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Find all check', async () => {
    const cat:Cat = {name:'test',age:10,bloodType:BloodType.A};
    const result:Promise<Cats[]> = new Promise(
      (resolve,)=>{
         resolve([
           cat as Cats]);
      }
      );
      jest.spyOn(service, 'findAll').mockImplementation(async() => result);
      const test = await result;
      expect(await service.findAll()).toBe([cat as Cats]);
  })
});
