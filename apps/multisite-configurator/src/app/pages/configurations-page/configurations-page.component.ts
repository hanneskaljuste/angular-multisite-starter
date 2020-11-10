import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteConfiguration, SiteFeature } from '@hk/interfaces';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component( {
    selector: 'hk-configurations-page',
    templateUrl: './configurations-page.component.html',
    styleUrls: [ './configurations-page.component.scss' ]
} )
export class ConfigurationsPageComponent implements OnInit {
    /**
     *
     *
     * @memberof ConfigurationsPageComponent
     */
    sites$ = this.http.get<SiteConfiguration[]>( '/api/site-configuration/all' );

    /**
     *
     *
     * @memberof ConfigurationsPageComponent
     */
    features$ = this.http.get<SiteFeature[]>( '/api/site-feature/all' );

    /**
     *
     *
     * @type {SiteFeature[]}
     * @memberof ConfigurationsPageComponent
     */
    allFeatures: SiteFeature[];

    /**
     *
     *
     * @type {SiteFeature[]}
     * @memberof ConfigurationsPageComponent
     */
    availableFeatures: SiteFeature[];

    /**
     *
     *
     * @type {SiteConfiguration}
     * @memberof ConfigurationsPageComponent
     */
    selectedSite: SiteConfiguration = null;

    /**
     *
     *
     * @memberof ConfigurationsPageComponent
     */
    siteForm = new FormGroup( {
        domain: new FormControl( '', Validators.required ),
        theme: new FormControl( '', Validators.required ),
    } );


    /**
     * Creates an instance of ConfigurationsPageComponent.
     * @param {HttpClient} http
     * @memberof ConfigurationsPageComponent
     */
    constructor( private http: HttpClient ) { }


    /**
     *
     *
     * @memberof ConfigurationsPageComponent
     */
    ngOnInit (): void {
        this.features$.subscribe( features => {
            if ( features ) {
                console.log( 'features', features );
                // this.todo = features.filter( f => this.selectedSite.features.filter( sf => sf.id === f.id ).length === 0 );
                this.allFeatures = features;
            }
        } )
        //
    }

    /**
     *
     *
     * @param {SiteConfiguration} site
     * @memberof ConfigurationsPageComponent
     */
    selectSite ( site: SiteConfiguration ) {
        console.log( site );
        // this.features$ = this.http.get<SiteFeature[]>( '/api/site-feature/all' );
        if ( !site.features ) {
            site.features = [];
        }

        this.availableFeatures = this.allFeatures.filter( feature => site.features.filter( siteFeature => siteFeature.id === feature.id ).length === 0 );
        this.selectedSite = site;
        // this.done = this.selectedSite.features.map( f => f );
    }

    /**
     *
     *
     * @param {SiteConfiguration} site
     * @memberof ConfigurationsPageComponent
     */
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


    /**
     *
     *
     * @memberof ConfigurationsPageComponent
     */
    save () {
        // this.selectedSite.features = this.done;
        this.http.put( `/api/site-configuration/${this.selectedSite.id}`, this.selectedSite ).subscribe(
            d => {
                this.sites$ = this.http.get<SiteConfiguration[]>( '/api/site-configuration/all' );
            },
            e => {
                console.log( e );
            }
        );
        console.log( 'save', this.selectedSite );
    }


    /**
     *
     *
     * @param {CdkDragDrop<string[]>} event
     * @memberof ConfigurationsPageComponent
     */
    drop ( event: CdkDragDrop<string[]> ) {
        if ( event.previousContainer === event.container ) {
            moveItemInArray( event.container.data, event.previousIndex, event.currentIndex );
        } else {
            transferArrayItem( event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex );
        }
        this.save();
    }



    /**
     *
     *
     * @memberof ConfigurationsPageComponent
     */
    onSubmit () {
        // TODO: Use EventEmitter with form value
        console.warn( this.siteForm.value );
        this.http.post( `/api/site-configuration`, this.siteForm.value ).subscribe(
            d => {
                console.log( d );
                this.sites$ = this.http.get<SiteConfiguration[]>( '/api/site-configuration/all' );
                this.resetSiteForm();
            },
            e => {
                console.log( e );
            }
        );
    }

    /**
     *
     *
     * @memberof ConfigurationsPageComponent
     */
    resetSiteForm () {
        this.siteForm.reset();
    }

}
