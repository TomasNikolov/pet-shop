import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animals/animal.module';

@Module({
  imports: [AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
