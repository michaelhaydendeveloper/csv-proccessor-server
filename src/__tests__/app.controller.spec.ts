import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

describe('AppController', () => {
  let appController:AppController;
  beforeEach(async () => {
    console.log('beforeEach');
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root GET Request to "/"', () => {
    it('Should return "Hello World"', () => {
      console.log('GET to /');
      // arrange
      const MESSAGE = 'Hello World!';
      // act
      const indexResponse = appController.index();
      // assert
      expect(indexResponse).toBe(MESSAGE);
    });
  });
});
