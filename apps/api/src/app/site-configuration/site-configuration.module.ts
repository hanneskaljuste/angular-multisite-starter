import { Module } from '@nestjs/common';
import { SiteConfigurationService } from './site-configuration.service';
import { SiteConfigurationController } from './site-configuration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteConfiguration } from './site-configuration.entity';

@Module( {
    imports: [ TypeOrmModule.forFeature( [ SiteConfiguration ] ) ],
    providers: [ SiteConfigurationService ],
    controllers: [ SiteConfigurationController ]
} )
export class SiteConfigurationModule { }
