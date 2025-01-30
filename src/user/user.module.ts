import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/user/entity'
import { AuthMiddleware } from 'src/user/middleware'
import { UserRepository } from 'src/user/repository'
import { AuthService } from 'src/user/service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthMiddleware, UserRepository, AuthService],
  exports: [AuthMiddleware, AuthService],
})
export class UserModule {}
