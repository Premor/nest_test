import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { Cats } from './cats.model';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    let mockModel = {};
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService,
        {
          provide:getModelToken(Cats),
          useValue:mockModel,
        }
      ],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
