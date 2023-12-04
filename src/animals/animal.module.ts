import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AnimalProviders } from './animal.provider';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';

@Module({
  controllers: [AnimalController],
  imports: [DatabaseModule],
  providers: [...AnimalProviders, AnimalService],
})
export class AnimalModule {}
