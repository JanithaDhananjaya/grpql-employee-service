import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { ApolloDriver } from "@nestjs/apollo";

@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot(
    {
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
