import { Processor, Process } from '@nestjs/bull'
import { Logger } from '@nestjs/common'
import { Job } from 'bull'
import { ContentRepository } from 'src/content/repository'

@Processor('import_contents')
export class ContentProcessor {
  private readonly logger = new Logger(ContentProcessor.name)

  constructor(private readonly contentRepository: ContentRepository) {}

  @Process()
  async importContent(job: Job) {
    const { title, type, description } = job.data
    if (!title || !type || !description) return

    try {
      const content = await this.contentRepository.insertContent(title, type, description)
      this.logger.log(`Content ${content.id} inserted successfully`)
    } catch (error) {
      this.logger.error(`Error inserting content: ${error}`)
    }
  }
}
