import { Module } from '@nestjs/common';
import { SiteFeatureService } from './site-feature.service';
import { SiteFeatureController } from './site-feature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteFeature } from './site-feature.entity';

@Module( {
    imports: [ TypeOrmModule.forFeature( [ SiteFeature ] ) ],
    providers: [ SiteFeatureService ],
    controllers: [ SiteFeatureController ]
} )
export class SiteFeatureModule { }
