import { ProductService } from '../modules/services/product.service';
import { Product } from '../modules/entities/product.entity';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
}
