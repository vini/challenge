/* eslint-disable no-console */
import { DataSource } from 'typeorm'
import { User } from 'src/user/entity'
import { Company } from 'src/company/entity'
import { AppDataSource } from 'src/database/data-source.database'

export const seedDatabase = async (dataSource: DataSource) => {
  const queryRunner = dataSource.createQueryRunner()
  await queryRunner.connect()

  const company = queryRunner.manager.create(Company, { name: 'Company A' })
  const createdCompany = await queryRunner.manager.save(company)

  const user = queryRunner.manager.create(User, {
    id: '18c37ce2-cd34-4305-9ca4-c15fc736beac',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    password: 'hashed-password',
    company: createdCompany,
  })
  await queryRunner.manager.save(user)

  console.info('Database seeded successfully.')
  await queryRunner.release()

  process.exit(0)
}

AppDataSource.initialize()
  .then(() => seedDatabase(AppDataSource))
  .catch((err) => console.error('Error seeding database:', err))
