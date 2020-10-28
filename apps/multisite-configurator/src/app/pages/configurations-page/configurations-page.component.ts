import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteConfiguration, SiteFeature } from '@hk/interfaces';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component( {
    selector: 'hk-configurations-page',
    templateUrl: './configurations-page.component.html',
    styleUrls: [ './configurations-page.component.scss' ]
} )
export class ConfigurationsPageComponent implements OnInit {
    sites$ = this.http.get<SiteConfiguration[]>( '/api/site-configuration/all' );
    features$ = this.http.get<SiteFeature[]>( '/api/site-feature/all' );

    selectedSite: SiteConfiguration = null;




    todo = [];

    done = [];




    constructor( private http: HttpClient ) { }
    ngOnInit (): void {
        this.features$.subscribe( features => {
            if ( features ) {
                this.todo = features.map( f => f.name );
            }
        } )
        //
    }
    selectSite ( site: SiteConfiguration ) {
        console.log( site );
        this.features$ = this.http.get<SiteFeature[]>( '/api/site-feature/all' );
        this.selectedSite = site;
        this.done = this.selectedSite.features.map( f => f );
    }

    delete ( site: SiteConfiguration ) {
        this.http.delete( `/api/site-configuration/${site.id}` ).subscribe(
            d => {
                console.log( d );
                this.sites$ = this.http.get<SiteConfiguration[]>( '/api/site-configuration/all' );
            },
            e => {
                console.log( e )
            }
        );
    }


    save () {
        this.selectedSite.features = this.done;
        this.http.put( `/api/site-configuration/${this.selectedSite.id}`, this.selectedSite ).subscribe(
            d => {
                console.log( d );
                this.sites$ = this.http.get<SiteConfiguration[]>( '/api/site-configuration/all' );
            },
            e => {
                console.log( e );
            }
        );
        console.log( 'save', this.selectedSite );
    }


    drop ( event: CdkDragDrop<string[]> ) {
        if ( event.previousContainer === event.container ) {
            moveItemInArray( event.container.data, event.previousIndex, event.currentIndex );
        } else {
            transferArrayItem( event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex );
        }
    }



}
