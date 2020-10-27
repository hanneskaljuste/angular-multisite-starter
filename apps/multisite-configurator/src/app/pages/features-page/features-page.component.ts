import { HttpClient } from '@angular/common/http';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SiteFeature } from '@hk/interfaces';

@Component( {
    selector: 'hk-features-page',
    templateUrl: './features-page.component.html',
    styleUrls: [ './features-page.component.scss' ]
} )
export class FeaturesPageComponent implements OnInit {
    features$ = this.http.get<SiteFeature>( '/api/site-feature/all' );


    featureForm = new FormGroup( {
        name: new FormControl( '', Validators.required ),
    } );

    constructor( private http: HttpClient, public dialog: MatDialog ) { }

    ngOnInit (): void {
        //
    }

    onSubmit () {
        console.warn( this.featureForm.value );
        this.http.post( '/api/site-feature', this.featureForm.value ).subscribe(
            d => {
                console.log( d );
                this.features$ = this.http.get<SiteFeature>( '/api/site-feature/all' );
                this.featureForm.reset();
            },
            e => {
                console.log( e );
            }
        );
    }

    openDialog ( feature: SiteFeature ) {
        const dialogRef = this.dialog.open( ConfirmDeleteDialog, {
            data: {
                ...feature
            }
        } );
        dialogRef.afterClosed().subscribe( data => {
            console.log( data );
            if ( data ) {
                this.http.delete( `/api/site-feature/${data.id}` ).subscribe(
                    d => {
                        console.log( d );
                        this.features$ = this.http.get<SiteFeature>( '/api/site-feature/all' );
                    },
                    e => {
                        console.log( e );
                    }
                )
            }
        } );
    }


}



@Component( {
    selector: 'confirm-delete-dialog',
    templateUrl: 'confirm-delete-dialog.html',
} )
export class ConfirmDeleteDialog {

    constructor( @Inject( MAT_DIALOG_DATA ) public feature: SiteFeature, public dialogRef: MatDialogRef<ConfirmDeleteDialog>, private ngZone: NgZone ) { }
    onNoClick (): void {
        // this.dialogRef.close();
        this.dialogRef.close( false );
    }

    onConfirmClick (): void {
        this.dialogRef.close( this.feature );
    }
}
