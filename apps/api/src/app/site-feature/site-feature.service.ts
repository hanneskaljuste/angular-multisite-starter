import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { SiteFeature } from './site-feature.entity';

@Injectable()
export class SiteFeatureService {
    constructor(
        @InjectRepository( SiteFeature )
        private repository: Repository<SiteFeature>,
    ) { }
    async findAll (): Promise<SiteFeature[]> {
        return await this.repository.find();
    }

    async create ( data: SiteFeature ): Promise<SiteFeature> {
        return await this.repository.save( data );
    }

    async update ( data: SiteFeature ): Promise<UpdateResult> {
        return await this.repository.update( data.id, data );
    }

    async delete ( id ): Promise<DeleteResult> {
        return await this.repository.delete( id );
    }
}
