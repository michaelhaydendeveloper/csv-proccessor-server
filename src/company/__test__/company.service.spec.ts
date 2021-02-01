import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRepository } from '../company.repository';
import { CompanyService } from '../company.service';
import { CreateCompanyDTO } from '../dto/create-company.dto';
import { NotFoundException } from '@nestjs/common';

describe('CompanyService', () => {
  const EXPECTED_RESULT = 'someCompany';
  const MOCK_COMPANY = {
    name: 'FakeCompany',
    sftpFilePath: { 'archive': '/archive', 'file': '/file' },
    active: true,
  };
  const MOCK_DEACTIVATED_COMPANY = {
    name: 'FakeCompany',
    sftpFilePath: { 'archive': '/archive', 'file': '/file' },
    active: false,
  };
  let companyService: CompanyService;
  let companyRepository: CompanyRepository;

  const mockCompanyRepository = () => ({
    createCompany: jest.fn().mockResolvedValue(EXPECTED_RESULT),
    editCompany: jest.fn().mockResolvedValue(EXPECTED_RESULT),
    deactivateCompany: jest.fn().mockResolvedValue(MOCK_DEACTIVATED_COMPANY),
    find: jest.fn().mockResolvedValue(EXPECTED_RESULT),
    findOne: jest.fn().mockResolvedValue(MOCK_COMPANY),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyService,
        {
          provide: CompanyRepository,
          useFactory: mockCompanyRepository,
        }
      ],
    }).compile();
    companyService = await module.get<CompanyService>(CompanyService);
    companyRepository = await module.get<CompanyRepository>(CompanyRepository);
  });

  it('Service (CompanyService) should be defined', () => {
    // arrange
    // act
    // assert
    expect(companyService).toBeDefined();
  });

  it('companyRepository  should be defined', () => {
    // arrange
    // act
    // assert
    expect(companyRepository).toBeDefined();
  });

  describe('createCompany', () => {
    it('companyService.createCompany() Should save company to DB via companyRepository.createCompany()', async () => {
      // arrange
      // act
      expect(companyRepository.createCompany).not.toHaveBeenCalled();
      const result = await companyService.createCompany(MOCK_COMPANY);
      // assert
      expect(companyRepository.createCompany).toBeCalledWith(MOCK_COMPANY);
      expect(result).toEqual(EXPECTED_RESULT);
    });
  });

  describe('getCompanies',() => {
    it('should get all companies', async () => {
      // arrange
      // act
      expect(companyRepository.find).not.toHaveBeenCalled();
      const result = await companyService.getCompanies();
      // assert
      expect(companyRepository.find).toHaveBeenCalled();
      expect(result).toEqual(EXPECTED_RESULT);
    });
  });

  describe('getCompany', () => {
    it('should get single company', async () => {
      // arrange
      // act
      expect(companyRepository.findOne).not.toHaveBeenCalled();
      const result = await companyService.getCompany(1);
      // assert
      expect(result).toEqual(MOCK_COMPANY);
      expect(companyRepository.findOne).toBeCalledWith(1);
    });
    it('should throw error if company not found', async () => {
      // arrange
      companyRepository.findOne = jest.fn().mockResolvedValue(false);
      // act
      let result;
      try {
        result = await companyService.getCompany(1);
      } catch(err) {
        // assert
        expect(err).toBeInstanceOf(NotFoundException);
        expect(result).toEqual(undefined);
      }
    });
  });

  describe('editCompany', () => {
    it('Should edited company', async() => {
      // arrange
      companyRepository.findOne = jest.fn().mockResolvedValue(true);
      const company = new CreateCompanyDTO();
      let result;
      // act
      try {
        result = await companyService.editCompany(1, company);
      } catch(err) {
        console.log('err', err);
      }

      // assert
      expect(companyRepository.findOne).toBeCalledWith(1);
      expect(result).toBe(EXPECTED_RESULT);
      expect(companyRepository.editCompany).toBeCalled();
    });
    it('Should throw error if company not found', async() => {
      // arrange
      companyRepository.findOne = jest.fn().mockResolvedValue(false);
      const company = new CreateCompanyDTO();
      // act
      try {
        await companyService.editCompany(1, company);
      } catch(err) {
        // assert
        expect(err).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('deactivateCompany', () => {
    it('should deactivate a company', async() => {
      // arrange
      // act
      expect(companyRepository.deactivateCompany).not.toHaveBeenCalled();
      const result = await companyService.deactivateCompany(1);
      // assert
      expect(companyRepository.findOne).toBeCalledWith(1);
      expect(companyRepository.deactivateCompany).toBeCalledWith(MOCK_COMPANY);
      expect(result).toBe(MOCK_DEACTIVATED_COMPANY);
    });
    it('Throw error if company not found', () => {
      companyRepository.findOne = jest.fn().mockResolvedValue(false);
      try {
        companyService.deactivateCompany(1);
      } catch(err) {
        expect(err).toBeInstanceOf(NotFoundException);
      }
    });
  });
});