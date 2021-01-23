import { Injectable, NotFoundException } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyRepository } from './company.repository';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyRepository)
    private companyRepository: CompanyRepository,
  ) {}

  // storeDocuments() {
  //   return Promise.resolve(undefined);
  // }
  //
  // archiveDocuments() {
  //   return Promise.resolve(undefined);
  // }
  //
  // processDocuments() {
  //   return Promise.resolve(undefined);
  // }
  //
  // queueDocuments() {
  //   return Promise.resolve(undefined);
  // }

  /**
   * Create Company
   * @param createCompanyDto
   */
  public async createCompany(
    createCompanyDto: CreateCompanyDTO,
  ): Promise<Company> {
    console.log('CompanyService :: createCompany');
    return await this.companyRepository.createCompany(createCompanyDto);
  }

  /**
   * Get ALL Companies
   */
  public async getCompanies(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  /**
   * Get Company By ID
   * @param companyId
   */
  public async getCompany(
    companyId: number,
  ): Promise<Company> {
    const foundCompany = await this.companyRepository.findOne(companyId);
    if(!foundCompany) {
      throw new NotFoundException('Company Not Found');
    }
    return foundCompany;
  }

  /**
   * Edit Company by ID
   * @param companyId
   * @param createCompanyDto
   */
  public async editCompany(
    companyId,
    createCompanyDto: CreateCompanyDTO,
  ): Promise<Company> {
    const editedCompany = await this.companyRepository.findOne(companyId);
    if(!editedCompany) {
      throw new NotFoundException('Company Not Found');
    }
    return this.companyRepository.editCompany(
      createCompanyDto,
      editedCompany,
    );
  }

  /**
   * Delete Company By ID
   * @param companyId
   */
  public async deactivateCompany(companyId: number): Promise<Company> {
    const editedCompany = await this.companyRepository.findOne(companyId);
    if(!editedCompany) {
      throw new NotFoundException('Company Not Found');
    }
    return await this.companyRepository.deactivateCompany(
      editedCompany,
    );
  }
}
