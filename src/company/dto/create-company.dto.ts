import { IsBoolean, IsObject, IsString } from 'class-validator';

interface SftpFilePath {
  archive: string;
  file: string;
}

export class CreateCompanyDTO {
  @IsString()
  name: string;

  @IsObject()
  sftpFilePath: SftpFilePath;

  @IsBoolean()
  active: boolean;
}