import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductShema } from './schemas/product.schema';

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    imports: [
        MongooseModule.forFeature([
            {
               name: Product.name, schema: ProductShema
            }
        ])
    ]
})
export class ProductsModule {
    
}