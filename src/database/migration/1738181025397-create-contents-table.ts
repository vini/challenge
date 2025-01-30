import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateContentsTable1738181025397 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE content_type AS ENUM ('video', 'pdf', 'scorm', 'image', 'text');

      CREATE TABLE contents (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        type content_type NOT NULL,
        description VARCHAR(500),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE contents')
  }
}
