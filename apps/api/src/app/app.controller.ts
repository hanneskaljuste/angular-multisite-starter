import { Controller, Get, Query } from '@nestjs/common';

import { Message, SiteConfiguration } from '@hk/interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor( private readonly appService: AppService ) { }

    @Get( 'hello' )
    getData (): Message {
        return this.appService.getData();
    }

    @Get( 'configuration' )
    getSiteConfiguration ( @Query( 'domain' ) domain ): SiteConfiguration {
        return this.appService.getSiteConfiguration( domain );
    }


}
