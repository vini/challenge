import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Company } from 'src/company/entity'

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [],
})
export class CompanyModule {}
