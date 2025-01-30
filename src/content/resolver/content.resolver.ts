import { Logger } from '@nestjs/common'
import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql'
import { ContentService } from 'src/content/service'

@Resolver()
export class ContentResolver {
  private readonly logger = new Logger(ContentResolver.name)

  constructor(private readonly contentService: ContentService) {}

  @Mutation(() => String)
  async importCsv(@Args('csvData') csvData: string, @Context('req') req) {
    this.logger.log(`Performing import csv to user=${req.user.id}`)
    return this.contentService.processCsv(csvData)
  }

  @Query(() => String)
  hello(): string {
    return 'Hello'
  }
}
