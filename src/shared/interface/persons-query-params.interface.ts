import { IsOptional } from "class-validator";
import { Estado, Sexo } from "./covid-data.interface";

export class PersonQueryParams {
  @IsOptional()
  sex?: Sexo;
  @IsOptional()
  state?: Estado;
  @IsOptional()
  city?: string;
}
