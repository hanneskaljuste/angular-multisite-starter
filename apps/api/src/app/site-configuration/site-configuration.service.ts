import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SiteConfiguration } from './site-configuration.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class SiteConfigurationService {
    constructor(
        @InjectRepository( SiteConfiguration )
        private siteConfigurationRepository: Repository<SiteConfiguration>,
    ) { }
    async findAll (): Promise<SiteConfiguration[]> {
        return await this.siteConfigurationRepository.find( {
            relations: [ "features" ]
        } );
    }

    async findByDomain ( domain ): Promise<SiteConfiguration> {
        return await this.siteConfigurationRepository.findOne( {
            where: { domain: domain },
            relations: [ "features" ]
        } );
    }

    async create ( data: SiteConfiguration ): Promise<SiteConfiguration> {
        return await this.siteConfigurationRepository.save( data );
    }

    async update ( data: SiteConfiguration ): Promise<UpdateResult> {
        return await this.siteConfigurationRepository.update( data.id, data );
    }

    async delete ( id ): Promise<DeleteResult> {
        return await this.siteConfigurationRepository.delete( id );
    }
}
