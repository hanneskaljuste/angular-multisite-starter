import { Test, TestingModule } from '@nestjs/testing';
import { SiteConfigurationService } from './site-configuration.service';

describe( 'SiteConfigurationService', () => {
    let service: SiteConfigurationService;

    beforeEach( async () => {
        const module: TestingModule = await Test.createTestingModule( {
            providers: [ SiteConfigurationService ],
        } ).compile();

        service = module.get<SiteConfigurationService>( SiteConfigurationService );
    } );

    it( 'should be defined', () => {
        expect( service ).toBeDefined();
    } );
} );
