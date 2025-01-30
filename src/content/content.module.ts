import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BullModule } from '@nestjs/bull'
import { ContentService } from 'src/content/service'
import { ContentResolver } from 'src/content/resolver'
import { Content } from 'src/content/entity'
import { ContentProcessor } from 'src/content/processor'
import { ContentRepository } from 'src/content/repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([Content]),
    BullModule.registerQueue({ name: 'import_contents' }),
  ],
  providers: [ContentService, ContentProcessor, ContentRepository, ContentResolver],
})
export class ContentModule {}
