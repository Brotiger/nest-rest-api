import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Redirect, HttpStatus, Header } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(readonly productsService: ProductsService){

    }

    @Get()
    //@Redirect('https://google.com', 301)
    getAll(): Promise<Product[]>{
        return this.productsService.getAll();
    }

    //Запрос с параметром
    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product>{ //Декоратор Params тоже что класс Requer в Laravel
        return this.productsService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)// Статус ответа 201
    @Header('Catch-Control', 'none')// Добавляем заголовок
    create(@Body() createProductDto: CreateProductDto): Promise<Product>{ //Получение тела запроса
        return this.productsService.create(createProductDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<Product>{
        return this.productsService.remove(id);
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id:string): Promise<Product>{
        return this.productsService.update(id, updateProductDto);
    }
}
