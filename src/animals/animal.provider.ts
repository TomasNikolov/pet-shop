import { DataSource } from 'typeorm';
import { Animal } from './animal.entity';

export const AnimalProviders = [
  {
    provide: 'ANIMAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Animal),
    inject: ['DATA_SOURCE'],
  },
];
