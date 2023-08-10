import {
  DepartamentoNom,
  Estado,
  FuenteTipoContagio,
  Recuperado,
  Sexo,
  TipoRecuperacion,
  Ubicacion,
} from "src/shared/interface/covid-data.interface";
import { IsString, IsDate } from "class-validator";

export class PersonDto {
  @IsString()
  readonly id_de_caso: string;
  @IsDate()
  readonly fecha_reporte_web: Date;
  @IsDate()
  readonly fecha_de_notificaci_n: Date;
  @IsString()
  readonly departamento: string;
  @IsString()
  readonly departamento_nom: DepartamentoNom;
  @IsString()
  readonly ciudad_municipio: string;
  @IsString()
  readonly ciudad_municipio_nom: string;
  @IsString()
  readonly edad: string;
  @IsString()
  readonly unidad_medida: string;
  @IsString()
  readonly sexo: Sexo;
  @IsString()
  readonly fuente_tipo_contagio: FuenteTipoContagio;
  @IsString()
  readonly ubicacion: Ubicacion;
  @IsString()
  readonly estado: Estado;
  @IsString()
  readonly recuperado: Recuperado;
  @IsDate()
  readonly fecha_inicio_sintomas?: Date;
  @IsDate()
  readonly fecha_diagnostico: Date;
  @IsDate()
  readonly fecha_recuperado?: Date;
  @IsString()
  readonly tipo_recuperacion?: TipoRecuperacion;
  @IsString()
  readonly per_etn_: string;
  @IsDate()
  readonly fecha_muerte?: Date;
  @IsString()
  readonly nom_grupo_?: string;
}
