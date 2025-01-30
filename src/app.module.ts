import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BullModule } from '@nestjs/bull'
import { GraphQLModule } from '@nestjs/graphql'
import { ContentModule } from 'src/content'
import { UserModule } from 'src/user'
import { CompanyModule } from 'src/company'
import { AuthMiddleware } from 'src/user/middleware'
import { ApolloDriver } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'challenge',
      autoLoadEntities: true,
      synchronize: false,
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver }),
    ContentModule,
    UserModule,
    CompanyModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('{*splat}')
  }
}
