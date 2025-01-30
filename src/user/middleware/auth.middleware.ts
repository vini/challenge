import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { AuthService } from 'src/user/service'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token is required.')
    }

    const token = authHeader.split(' ')[1]

    try {
      const user = await this.authService.validateToken(token)
      req['user'] = user

      next()
    } catch {
      throw new UnauthorizedException('Invalid token.')
    }
  }
}
