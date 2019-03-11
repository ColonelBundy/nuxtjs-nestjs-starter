import { Module, NestModule } from '@nestjs/common'
import { AppController } from './application.controller'

@Module({
  imports: [],
  controllers: [AppController],
  providers: []
})
export class ApplicationModule implements NestModule {
  configure(consumer): void {}
}
