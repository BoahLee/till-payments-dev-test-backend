import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from '../items';
import { Item } from '../item';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Items> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Item> {
    return this.itemsService.find(id);
  }

  @Post()
  async create(@Body('item') item: Item): Promise<void> {
    this.itemsService.create(item);
  }

  @Put()
  async update(@Body('item') item: Item): Promise<void> {
    this.itemsService.update(item);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.itemsService.delete(id);
  }
}
