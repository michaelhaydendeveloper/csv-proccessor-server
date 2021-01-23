import { EntityRepository, Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDTO } from './dto/create-company.dto';

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
  public async createCompany(
    createCompanyDto:CreateCompanyDTO
  ): Promise<Company> {
    const { name, sftpFilePath } = createCompanyDto;

    const company = new Company();
    company.name = name;
    company.sftpFilePath = sftpFilePath;
    await company.save();
    return company;
  }

  public async editCompany(
    createCompanyDto: CreateCompanyDTO,
    editedCompany: Company,
  ): Promise<Company> {
    const { name, sftpFilePath, active } = createCompanyDto;

    editedCompany.name = name;
    editedCompany.sftpFilePath = sftpFilePath;
    editedCompany.active = active;
    await editedCompany.save();

    return editedCompany;
  }

  /**
   * Deactivate Company (used INSTEAD of delete)
   * @param createCompanyDto
   */
  public async deactivateCompany(
    createCompanyDto: Company,
  ){
    createCompanyDto.active = false;
    await createCompanyDto.save();

    return createCompanyDto;
  }
}