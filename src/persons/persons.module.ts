import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PersonsController } from "./controllers/persons.controller";
import { PersonsService } from "./services/persons.service";
import { Person } from "./entities/person.entity";
import { ProvidersModule } from "src/providers/providers.module";

@Module({
  imports: [TypeOrmModule.forFeature([Person]), ProvidersModule],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
