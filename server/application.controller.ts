import { Get, Controller } from '@nestjs/common'

@Controller()
export class AppController {
  constructor() {}

  @Get('/test')
  test(): string {
    return 'hello'
  }
}
