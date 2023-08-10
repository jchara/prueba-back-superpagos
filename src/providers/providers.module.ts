import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

import { DataCovidController } from "./controllers/data-covid.controller";
import { DataCovidService } from "./services/data-covid.service";

@Module({
  imports: [HttpModule],
  controllers: [DataCovidController],
  providers: [DataCovidService],
})
export class ProvidersModule {}
