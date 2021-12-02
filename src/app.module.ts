import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProductModule } from './modules/modules/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [ProductModule,GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/graphsql-schema.gql'),
  }),TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '@0868464543Ba',
    database: 'mydb',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
