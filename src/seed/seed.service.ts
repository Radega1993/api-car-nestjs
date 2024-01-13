import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CAR_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    this.carsService.fillCarsWithSeedData(CAR_SEED);
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    return 'Seed executed';
  }
}
