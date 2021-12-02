import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity , PrimaryGeneratedColumn} from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  name : string ;
  @Field()
  @Column()
  price : number ;
}
