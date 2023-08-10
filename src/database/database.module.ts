import { Module, Global } from "@nestjs/common";
import { Client } from "pg";

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DBNAME,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT, 10),
});

client.connect();

@Global()
@Module({
  providers: [
    {
      provide: "PG",
      useValue: client,
    },
  ],
  exports: ["PG"],
})
export class DatabaseModule {}
