import { Estado, Sexo } from "./covid-data.interface";

export interface PersonQueryParams {
  sex?: Sexo;
  state?: Estado;
  city?: string;
}
