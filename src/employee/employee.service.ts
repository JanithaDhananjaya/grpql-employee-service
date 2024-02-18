import { Injectable } from "@nestjs/common";
import { EmployeeCreateDTO } from "./dto/create-employee.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entities/employee.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {
  }

  create(employee: EmployeeCreateDTO): Promise<Employee> {
    let emp = this.employeeRepository.create(employee);
    return this.employeeRepository.save(emp);
  }

  findAll(): Promise<Employee []> {
    return this.employeeRepository.find();
  }
}
