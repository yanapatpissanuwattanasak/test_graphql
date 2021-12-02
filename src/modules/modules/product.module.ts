import { Module } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { ProductResolver } from 'src/product/product.resolver';


@Module({
  imports : [TypeOrmModule.forFeature([Product])],
  providers: [ProductResolver,ProductService]
})
export class ProductModule {}
