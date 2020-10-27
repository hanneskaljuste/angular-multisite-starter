import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { SiteFeature } from './site-feature.entity';
import { SiteFeatureService } from './site-feature.service';

@Controller( 'site-feature' )
export class SiteFeatureController {
    private readonly logger = new Logger( SiteFeatureController.name );
    constructor( private service: SiteFeatureService ) { }

    @Get( 'all' )
    all (): Promise<SiteFeature[]> {
        return this.service.findAll();
    }

    @Post()
    async create ( @Body() data: SiteFeature ): Promise<SiteFeature> {
        Logger.log( 'Got post data:' + data );
        this.logger.log( data );
        return this.service.create( data );
    }
    @Put( ':id' )
    async update ( @Param( 'id' ) id, @Body() data: SiteFeature ): Promise<UpdateResult> {
        data.id = Number( id );
        this.logger.log( 'Update #' + data.id )
        return this.service.update( data );
    }

    @Delete( ':id' )
    async delete ( @Param( 'id' ) id ): Promise<DeleteResult> {
        this.logger.log( 'Delete #' + id )
        return this.service.delete( id );
    }
}
