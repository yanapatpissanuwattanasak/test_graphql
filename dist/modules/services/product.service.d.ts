import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly ProductRepository;
    constructor(ProductRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
}
