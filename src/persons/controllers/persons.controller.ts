import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import { PersonsService } from "src/persons/services/persons.service";

@Controller("persons")
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  create() {
    return this.personsService.create();
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.personsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string) {
    return this.personsService.update(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.personsService.remove(+id);
  }
}
