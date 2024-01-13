import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carsService.findOneById(id);
  }
  @Post()
  createCard(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
  @Patch(':id')
  updateCard(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCardDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCardDto);
  }
  @Delete(':id')
  deleteCard(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
