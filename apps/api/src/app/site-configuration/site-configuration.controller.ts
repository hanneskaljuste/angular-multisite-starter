import { Controller, Get, Logger, Query } from '@nestjs/common';
import { SiteConfiguration } from './site-configuration.entity';
import { SiteConfigurationService } from './site-configuration.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UpdateResult } from 'typeorm';


@Controller( 'site-configuration' )
export class SiteConfigurationController {
    constructor( private service: SiteConfigurationService ) { }

    @Get()
    one ( @Query( 'domain' ) domain ): Promise<SiteConfiguration> {
        return this.service.findByDomain( domain );
    }


    @Get( 'all' )
    all (): Promise<SiteConfiguration[]> {
        return this.service.findAll();
    }



    @Post()
    async create ( @Body() data: SiteConfiguration ): Promise<SiteConfiguration> {
        Logger.log( 'Got post data:' + data );
        console.log( data );
        return this.service.create( data );
    }
    @Put( ':id' )
    async update ( @Param( 'id' ) id, @Body() data: SiteConfiguration ): Promise<UpdateResult> {
        data.id = Number( id );
        console.log( 'Update #' + data.id )
        return this.service.update( data );
    }

}
