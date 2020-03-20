import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UsersCreate1584662263856 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'login', type: 'varchar' },
          { name: 'password_hash', type: 'varchar' },
          { name: 'created_at', type: 'timestamp' },
          { name: 'updated_at', type: 'timestamp' },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
  }
}
