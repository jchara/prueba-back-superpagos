import { Sexo } from "./covid-data.interface";

export interface DataCovidQueryParams {
    sex?: Sexo;
    groupAge?: string;
  }