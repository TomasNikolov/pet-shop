import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AnimalService } from './animal.service';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) { }

  @Get()
  getAllAnimalsByKind(@Query('kind') kind: string) {
    return this.animalService.findAllAnimalsByKind(kind);
  }

  @Get(':id')
  getAnimal(@Param('id') id: number) {
    return this.animalService.findAnimalById(id);
  }

  @Post()
  addAnimal(@Body() animal) {
    return this.animalService.createAnimal(animal);
  }

  @Delete(':id')
  deleteAnimal(@Param('id') id) {
    return this.animalService.deleteAnimal(id);
  }
}
