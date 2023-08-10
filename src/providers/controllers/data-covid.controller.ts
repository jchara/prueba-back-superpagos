import { Controller, Get, Query } from "@nestjs/common";

import { DataCovidService } from "src/providers/services/data-covid.service";
import { CovidData } from "src/shared/interface/covid-data.interface";

interface QueryParams {
  sex?: string;
  groupAge?: string;
}
@Controller("data-covid")
export class DataCovidController {
  constructor(private readonly dataCovidService: DataCovidService) {}

  @Get()
  getAll(): Promise<CovidData[]> {
    return this.dataCovidService.getAll();
  }

  @Get("filter")
  getBySexoAndEdad(@Query() params: QueryParams): Promise<CovidData[]> {
    return this.dataCovidService.getBySexAndAge(params);
  }
}
