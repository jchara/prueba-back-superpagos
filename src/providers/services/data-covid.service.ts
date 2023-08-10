import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

import { CovidData, Sexo } from "src/shared/interface/covid-data.interface";

@Injectable()
export class DataCovidService {
  ageGroups: Map<string, number[]> = new Map([
    ["0-20", [0, 20]],
    ["21-40", [21, 40]],
    ["41", [41]],
  ]);

  constructor(private readonly httpService: HttpService) {}

  endpoint = "https://www.datos.gov.co/resource/gt2j-8ykr.json";

  private filterByAgeRange(min: number, max: number | undefined, data: CovidData[]) {
    return data.filter(item => {
      const age = parseInt(item.edad, 10);
      if (max) {
        return age >= min && age <= max;
      }
      return age >= min;
    });
  }

  private filterBySex(sex: Sexo, data: CovidData[]) {
    return data.filter(item => item.sexo === sex);
  }

  public async getBySexAndAge(params) {
    const { sex, groupAge } = params;
    const data = await this.getAll();

    if (groupAge && sex === undefined) {
      const [min, max] = this.ageGroups.get(groupAge);
      return this.filterByAgeRange(min, max, data);
    }

    if (sex && groupAge === undefined) {
      return this.filterBySex(sex, data);
    }

    if (sex && groupAge) {
      const [min, max] = this.ageGroups.get(groupAge);
      return data.filter(item => item.sexo === sex && this.filterByAgeRange(min, max, [item]).length > 0);
    }

    return data;
  }

  public async getAll(): Promise<CovidData[]> {
    try {
      const response = await firstValueFrom(this.httpService.get(this.endpoint));
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching COVID data: ${error.message}`);
    }
  }
}
