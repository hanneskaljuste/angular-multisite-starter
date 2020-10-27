import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteConfiguration } from '@hk/interfaces';

@Component( {
    selector: 'hk-configurations-page',
    templateUrl: './configurations-page.component.html',
    styleUrls: [ './configurations-page.component.scss' ]
} )
export class ConfigurationsPageComponent implements OnInit {
    sites$ = this.http.get<SiteConfiguration>( '/api/site-configuration/all' );

    selectedSite: SiteConfiguration = null;
    constructor( private http: HttpClient ) { }
    ngOnInit (): void {
        //
    }
    selectSite ( site: SiteConfiguration ) {
        this.selectedSite = site;
    }

    delete ( site: SiteConfiguration ) {
        this.http.delete( `/api/site-configuration/${site.id}` ).subscribe(
            d => {
                console.log( d );
                this.sites$ = this.http.get<SiteConfiguration>( '/api/site-configuration/all' );
            },
            e => {
                console.log( e )
            }
        );
    }



}
