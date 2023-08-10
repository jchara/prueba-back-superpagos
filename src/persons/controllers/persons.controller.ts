import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";

import { PersonsService } from "src/persons/services/persons.service";
import { PersonDto } from "../dto/person.dto";
import { PersonQueryParams } from "src/shared/interface/persons-query-params.interface";

@Controller("persons")
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  create(@Body() person: PersonDto) {
    return this.personsService.create(person);
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get("filter")
  getByFilter(@Query() params: PersonQueryParams) {
    return this.personsService.getByFilter(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.personsService.findOne(id);
  } 

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.personsService.remove(id);
  }
}
