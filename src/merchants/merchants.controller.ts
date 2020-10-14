import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { MerchantsService } from './merchants.service';
import { Merchants } from '../merchants';
import { Merchant } from '../merchant';

@Controller('merchants')
export class MerchantsController {
  constructor(private readonly merchantsServices: MerchantsService) {}

  @Get()
  async findAll(): Promise<Merchants> {
    return this.merchantsServices.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Merchant> {
    return this.merchantsServices.find(id);
  }
}
