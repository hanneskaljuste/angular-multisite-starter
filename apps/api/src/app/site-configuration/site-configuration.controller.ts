import { Controller, Get, Logger, Query } from '@nestjs/common';
import { SiteConfiguration } from './site-configuration.entity';
import { SiteConfigurationService } from './site-configuration.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiExtraModels, ApiOkResponse, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { SiteFeature } from '../site-feature/site-feature.entity';


@Controller( 'site-configuration' )
export class SiteConfigurationController {
    private readonly logger = new Logger( SiteConfigurationController.name );
    constructor( private service: SiteConfigurationService ) { }

    @Get()
    one ( @Query( 'domain' ) domain ): Promise<SiteConfiguration> {
        return this.service.findByDomain( domain );
    }


    @Get( 'all' )
    @ApiOkResponse( {
        description: 'aaa',
        type: SiteConfiguration,
        isArray: true
    } )
    all (): Promise<SiteConfiguration[]> {
        return this.service.findAll();
    }

    @Post()
    async create ( @Body() data: SiteConfiguration ): Promise<SiteConfiguration> {
        Logger.log( 'Got post data:' + data );
        this.logger.log( data );
        return this.service.create( data );
    }
    @Put( ':id' )
    async update ( @Param( 'id' ) id, @Body() data: SiteConfiguration ): Promise<SiteConfiguration> {
        // data.id = Number( id );
        this.logger.log( 'Update #' + JSON.stringify( data ) )
        return this.service.update( data );
    }

    @Delete( ':id' )
    async delete ( @Param( 'id' ) id ): Promise<DeleteResult> {
        this.logger.log( 'Delete #' + id )
        return this.service.delete( id );
    }



}
