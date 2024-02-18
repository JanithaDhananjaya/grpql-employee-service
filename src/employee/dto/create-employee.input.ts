import { InputType, Int, Field } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from "typeorm";

@InputType()
export class EmployeeCreateDTO {
  @Field()
  firstName: string
  @Field()
  lastName: string
  @Field()
  designation: string
  @Field()
  city: string
}
