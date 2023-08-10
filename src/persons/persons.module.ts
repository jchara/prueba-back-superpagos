import { Module } from '@nestjs/common';

import { PersonsController } from './controllers/persons.controller';
import { PersonsService } from './services/persons.service';

@Module({
    imports: [],
    controllers: [PersonsController ],
    providers: [PersonsService],
})
export class PersonsModule {}
