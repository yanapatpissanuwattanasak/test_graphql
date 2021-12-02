"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_service_1 = require("../modules/services/product.service");
const product_entity_1 = require("../modules/entities/product.entity");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    findAll() {
        return this.productService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    (0, graphql_1.Query)(() => [product_entity_1.Product], { name: 'product' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "findAll", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map