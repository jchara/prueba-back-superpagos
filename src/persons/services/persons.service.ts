import { Injectable, NotFoundException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cron } from "@nestjs/schedule";

import { Person } from "../entities/person.entity";
import { PersonDto } from "../dto/person.dto";
import { DataCovidService } from "src/providers/services/data-covid.service";
import { PersonQueryParams } from "src/shared/interface/persons-query-params.interface";

@Injectable()
export class PersonsService {
  private readonly logger = new Logger(PersonsService.name);

  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
    private dataCovidService: DataCovidService,
  ) {}

  async create(data: PersonDto): Promise<Person> {
    const person = this.personRepository.create(data);
    return this.personRepository.save(person);
  }

  findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findOne(id: string): Promise<Person> {
    const person = await this.personRepository.findOneBy({ id_de_caso: id });
    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return person;
  }

  async remove(id: string) {
    const exists = await this.findOne(id);
    if (!exists) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return this.personRepository.delete({ id_de_caso: id });
  }

  async getByFilter(params: PersonQueryParams): Promise<Person[]> {
    const { sex, state, city } = params;
    const query = this.personRepository.createQueryBuilder("person");
    if (sex) {
      query.andWhere("person.sexo = :sex", { sex });
    }
    if (state) {
      query.andWhere("person.estado = :state", { state });
    }
    if (city) {
      query.andWhere("person.ciudad_municipio = :city", { city });
    }

    const persons = await query.getMany();
    return persons;
  }

  private async insertDataCovid() {
    const dataCovid = await this.dataCovidService.getAll();
    const createData = this.personRepository.create(dataCovid);
    return this.personRepository.save(createData);
  }

  @Cron("0 */10 * * * *")
  private handleCron() {
    this.logger.debug("tarea programada inserta data covid");
    this.insertDataCovid();
  }
}
