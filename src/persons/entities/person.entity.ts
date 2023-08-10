import {
  DepartamentoNom,
  Estado,
  FuenteTipoContagio,
  Recuperado,
  Sexo,
  TipoRecuperacion,
  Ubicacion,
} from "src/shared/interface/covid-data.interface";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("person")
export class Person {
  @PrimaryGeneratedColumn()
  id_de_caso: string;

  @Column({ type: "timestamptz" })
  fecha_reporte_web: Date;

  @Column({ type: "timestamptz" })
  fecha_de_notificaci_n: Date;

  departamento: string;
  departamento_nom: DepartamentoNom;
  ciudad_municipio: string;
  ciudad_municipio_nom: string;
  edad: string;
  unidad_medida: string;
  sexo: Sexo;
  fuente_tipo_contagio: FuenteTipoContagio;
  ubicacion: Ubicacion;
  estado: Estado;
  recuperado: Recuperado;

  @Column({ type: "timestamptz", nullable: true })
  fecha_inicio_sintomas?: Date;

  @Column({ type: "timestamptz" })
  fecha_diagnostico: Date;

  @Column({ type: "timestamptz", nullable: true })
  fecha_recuperado?: Date;

  tipo_recuperacion?: TipoRecuperacion;
  per_etn_: string;

  @Column({ type: "timestamptz", nullable: true })
  fecha_muerte?: Date;
  nom_grupo_?: string;
}
