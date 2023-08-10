import { Injectable } from "@nestjs/common";


@Injectable()
export class PersonsService {
  constructor() {}

  create() {
    return "This action adds a new person";
  }

  findAll() {
    return `This action returns all persons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
