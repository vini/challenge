import { Injectable, Logger } from '@nestjs/common'
import { InjectQueue } from '@nestjs/bull'
import { Queue } from 'bull'

@Injectable()
export class ContentService {
  private readonly logger = new Logger(ContentService.name)

  constructor(@InjectQueue('import_contents') private readonly csvQueue: Queue) {}

  async processCsv(csvData: string): Promise<string> {
    if (!csvData || csvData.trim().length === 0) {
      throw new Error('The CSV file is empty or invalid')
    }

    const lines = csvData.split('\n')
    const header = lines[0].split(',')

    if (!this.validateHeader(header)) {
      this.logger.error(`CSV header is incorrect: ${header}`)
      return 'CSV header error'
    }

    lines.slice(1).forEach(async (line, index) => {
      if (!line.trim()) return

      let [title, type, description] = line.split(',')
      title = title?.trim()
      type = type?.trim()
      description = description?.trim()

      if (!title || !type || !description) {
        this.logger.warn(`Row ${index + 2} ignored: missing values`)
        return
      }

      if (!this.isValidType(type)) {
        this.logger.warn(`Row ${index + 2} ignored: invalid type (${type})`)
        return
      }

      const priority = Math.floor(Math.random() * 10)
      await this.addToQueue(title, type, description, priority, index + 1)
    })

    return 'CSV processed!'
  }

  private async addToQueue(
    title: string,
    type: string,
    description: string,
    priority: number,
    lineNumber: number,
  ) {
    try {
      this.logger.log(`Adding row=${lineNumber} with priority=${priority} to queue`)

      await this.csvQueue.add(
        { title, type, description },
        { priority, attempts: Math.floor(Math.random() * 5) + 1 },
      )
    } catch (error) {
      this.logger.error(`Error adding row=${lineNumber} queue: ${error}`)
    }
  }

  private validateHeader(header: string[]): boolean {
    const expectedHeaders = ['title', 'type', 'description']
    return (
      header.length === expectedHeaders.length &&
      header.every((h, i) => h.trim().toLowerCase() === expectedHeaders[i])
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private isValidType(type: string): boolean {
    // TODO: I didn't have time to finish this, so I'll leave it here for us to validate in the future
    return true
  }
}
