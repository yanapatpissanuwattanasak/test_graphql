import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductInput } from '../../product/dto/create-product.input';
import { UpdateProductInput } from '../../product/dto/update-product.input';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { Query } from '@nestjs/graphql';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly ProductRepository: Repository<Product>,
  ) {}
  // create(createProductInput: CreateProductInput) {
  //   return 'This action adds a new product';
  // }
  @Query(() => [Product], { name: 'getAllproduct' })
  async findAll() : Promise<Product[]> {
    return this.ProductRepository.find();
  }

  // async findById(id:number) : Promise<Product[]> {
  //   return this.ProductRepository.findByIds(id);
  // }

  // update(id: number, updateProductInput: UpdateProductInput) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
