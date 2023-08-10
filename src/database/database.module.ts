import { Global, Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Client } from "pg";

const client = new Client({
  user: "root",
  host: "localhost",
  database: "superpagos",
  password: "admin123",
  port: 5432,
});

client.connect();

const configTypeOrm: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin123",
  database: "superpagos",
  synchronize: true,
  autoLoadEntities: true,
};

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(configTypeOrm)],
  providers: [
    {
      provide: "PG",
      useValue: client,
    },
  ],
  exports: ["PG", TypeOrmModule],
})
export class DatabaseModule {}
