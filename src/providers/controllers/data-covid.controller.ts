import { Controller, Get, Query } from "@nestjs/common";

import { DataCovidService } from "src/providers/services/data-covid.service";
import { CovidData } from "src/shared/interface/covid-data.interface";

@Controller("data-covid")
export class DataCovidController {
  constructor(private readonly dataCovidService: DataCovidService) {}

  @Get()
  getAll(): Promise<CovidData[]> {
    return this.dataCovidService.getAll();
  }

  @Get("filter")
  getBySexoAndEdad(@Query() params: string): Promise<CovidData[]> {
    return this.dataCovidService.getBySexAndAge(params);
  }
}
