import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot(`mongodb://localhost:27017/${ process.env.DB_NAME }`, {useNewUrlParser: true, useUnifiedTopology: true, user: process.env.DB_USER, pass: process.env.DB_PASSWORD})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
