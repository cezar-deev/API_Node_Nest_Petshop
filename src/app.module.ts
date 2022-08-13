import { Module } from '@nestjs/common';
import { BackpfficeModule } from './backpffice/backpffice.module';


@Module({
  imports: [BackpfficeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
