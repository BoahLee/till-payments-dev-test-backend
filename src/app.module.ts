import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MerchantsModule } from './merchants/merchants.module';

@Module({
  imports: [ItemsModule, MerchantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
