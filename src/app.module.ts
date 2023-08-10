import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";

import { PersonsModule } from "./persons/persons.module";
import { ProvidersModule } from "./providers/providers.module";
import { DatabaseModule } from "./database/database.module";
import { environments } from "../environments";

const configOptions = {
  envFilePath: environments[process.env.NODE_ENV] || ".env",
  isGlobal: true,
};

@Module({
  imports: [
    PersonsModule,
    ProvidersModule,
    DatabaseModule,
    ConfigModule.forRoot(configOptions),
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
