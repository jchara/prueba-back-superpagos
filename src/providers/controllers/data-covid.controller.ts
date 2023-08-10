import { Controller, Get, Query } from "@nestjs/common";

import { DataCovidService } from "src/providers/services/data-covid.service";
import { CovidData } from "src/shared/interface/covid-data.interface";
import { DataCovidQueryParams } from "src/shared/interface/data-covid-query.interface";

@Controller("data-covid")
export class DataCovidController {
  constructor(private readonly dataCovidService: DataCovidService) {}

  @Get()
  getAll(): Promise<CovidData[]> {
    return this.dataCovidService.getAll();
  }

  @Get("filter")
  getBySexoAndEdad(@Query() params: DataCovidQueryParams): Promise<CovidData[]> {
    return this.dataCovidService.getByFilter(params);
  }
}
