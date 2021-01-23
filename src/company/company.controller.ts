import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
  constructor(
    private companyService:CompanyService
  ) {}

  /**
   * Trigger queueing documents
   */
  @Get('/document/queue')
  async queueDocument() {
    console.log('CompanyController :: queue');
    return this.companyService.queueDocuments();
  }

  /**
   * trigger processing documents
   */
  @Get('/document/process')
  async processDocument() {
    console.log('CompanyController :: process');
    return this.companyService.processDocuments();
  }

  /**
   * Trigger archiving Documents
   */
  @Get('/document/archive')
  async archiveDocument() {
    console.log('CompanyController :: archive');
    return this.companyService.archiveDocuments();
  }

  /**
   * Trigger sending Documents to storage (i.e. S3 bucket)
   */
  @Get('/document/storage')
  async storageDocument() {
    console.log('CompanyController :: storage');
    return this.companyService.storeDocuments();
  }

  /**
   * Get all companies
   */
  @Get()
  async getCompanies(): Promise<Company[]> {
    console.log('CompanyController :: getCompanies');
    return await this.companyService.getCompanies();
  }

  /**
   * Create company
   * @param createCompany
   */
  @Post()
  async createCompany(
    @Body() createCompany: CreateCompanyDTO,
  ): Promise<Company> {
    console.log('CompanyController :: createCompany');
    return await this.companyService.createCompany(createCompany);
  }

  /**
   * Get company by ID
   * @param companyId
   */
  @Get('/:companyId')
  async getCompany(
    @Param('companyId') companyId: number
  ): Promise<Company> {
    return await this.companyService.getCompany(companyId);
  }

  /**
   * Update company by ID
   * @param createCompanyDto
   * @param companyId
   */
  @Patch('/:companyId')
  async editCompany(
    @Body() createCompanyDto: CreateCompanyDTO,
    @Param('companyId') companyId: number,
  ): Promise<Company> {
    return await this.companyService.editCompany(companyId, createCompanyDto);
  }

  /**
   * Deactivate Company by ID
   * @param companyId
   */
  @Delete('/:companyId')
  async deactivateCompany(
    @Param('companyId') companyId: number
  ) {
    return await this.companyService.deactivateCompany(companyId);
  }
}
