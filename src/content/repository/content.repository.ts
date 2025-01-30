import { DataSource } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { Content } from 'src/content/entity'

@Injectable()
export class ContentRepository {
  constructor(private readonly dataSource: DataSource) {}

  async insertContent(title: string, type: string, description: string): Promise<Content> {
    const [content] = await this.dataSource.query<Content[]>(
      `
        INSERT INTO contents (title, type, description, created_at, updated_at)
        VALUES ('${title}', '${type}', '${description}', NOW(), NOW())
        RETURNING *
      `,
    )

    return content
  }
}
