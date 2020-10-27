import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { SiteConfiguration } from './site-configuration.entity';


@Injectable()
export class SiteConfigurationService {
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

    async update ( data: SiteConfiguration ): Promise<UpdateResult> {
        return await this.repository.update( data.id, data );
    }

    async delete ( id ): Promise<DeleteResult> {
        return await this.repository.delete( id );
    }
}
