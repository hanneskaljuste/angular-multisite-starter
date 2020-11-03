import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { SiteConfiguration } from './site-configuration.entity';


@Injectable()
export class SiteConfigurationService {
    private readonly logger = new Logger( SiteConfigurationService.name );
    constructor(
        @InjectRepository( SiteConfiguration )
        private repository: Repository<SiteConfiguration>,
    ) { }
    async findAll (): Promise<SiteConfiguration[]> {
        return await this.repository.find( {
            relations: [ "features" ]
        } );
    }

    async findByDomain ( domain ): Promise<SiteConfiguration> {
        return await this.repository.findOne( {
            where: { domain: domain },
            relations: [ "features" ]
        } );
    }

    async create ( data: SiteConfiguration ): Promise<SiteConfiguration> {
        return await this.repository.save( data );
    }

    async update ( data: SiteConfiguration ): Promise<SiteConfiguration> {
        this.logger.log( data );
        // This is a hack from here : https://github.com/typeorm/typeorm/issues/1595
        // Many-to-Many not working correctly in typeorm
        const original = await this.repository.findOne( data.id, { relations: [ "features" ] } );
        if ( original ) {
            await this.repository.save( data );
        }
        return await this.repository.findOne( data.id );
        // return await this.repository.update( data.id, data );
    }

    async delete ( id ): Promise<DeleteResult> {
        return await this.repository.delete( id );
    }
}
