import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class initialize1611497509854 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'company',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          length: '254'
        },
        {
          name: 'sftpFilePath',
          type: 'text'
        },
        {
          name: 'active',
          type: 'boolean'
        },
        {
          name: 'createdAt',
          type: 'timestamp with time zone',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp with time zone',
          default: 'now()'
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company');
  }
}
