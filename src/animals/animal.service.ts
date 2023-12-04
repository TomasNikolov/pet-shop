import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @Inject('ANIMAL_REPOSITORY')
    private animalRepository: Repository<Animal>,
  ) { }

  async findAllAnimalsByKind(kind: string): Promise<Animal[]> {
    return this.animalRepository.find({ where: { kind } });
  }

  async findAnimalById(id: number): Promise<Animal> {
    const animal = await this.animalRepository.findOne({where: {id}});

    if (!animal) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }

    return animal;
  }

  createAnimal(animal) {
    return this.animalRepository.save(animal);
  }

  async deleteAnimal(id) {
    return this.animalRepository.delete(id);
  }
}
