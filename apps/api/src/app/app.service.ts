import { Injectable } from '@nestjs/common';
import { Message, SiteConfiguration } from '@hk/interfaces';

@Injectable()
export class AppService {

    private siteConfigs = {
        "localhost:4200": {
            theme: 'dark',
            features: [ 'dashboard', 'profile' ]
        },
        "localhost:4201": {
            theme: 'light',
            features: [ 'dashboard', 'profile', 'footer' ]
        },
    }



    getData (): Message {
        return { message: 'Welcome to api!' };
    }


    getSiteConfiguration ( domain: string ): SiteConfiguration {
        return this.siteConfigs[ domain ];
    }
}
