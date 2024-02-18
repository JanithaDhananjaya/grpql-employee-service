import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { EmployeeCreateDTO } from './dto/create-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee, {name: 'createEmployee'})
  createEmployee(@Args('employee') employee: EmployeeCreateDTO) {
    return this.employeeService.create(employee);
  }

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }
}
