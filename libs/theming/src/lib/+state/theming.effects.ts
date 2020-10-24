import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromTheming from './theming.reducer';
import * as ThemingActions from './theming.actions';
import { ThemingService } from '../theming.service';

import { map } from 'rxjs/operators';
import { SiteConfiguration } from '@hk/interfaces';

@Injectable()
export class ThemingEffects {
    loadTheme$ = createEffect( () =>
        this.actions$.pipe(
            ofType( ThemingActions.loadTheme ),
            fetch( {
                run: ( action ) => {
                    console.log( 'Effect 1', action.host );
                    return this.service.fetchTheme( action.host ).pipe(
                        map( ( theme: SiteConfiguration ) => {
                            console.log( '###', theme );
                            if ( !theme ) {
                                // set 'default' theme (should be set somewhere else and imported prolly)
                                theme = {
                                    theme: 'default',
                                    features: [ 'no-configuration' ]
                                }
                            }
                            this.service.load( theme.theme, action.isProduction );
                            return ThemingActions.loadThemingSuccess( { theming: theme } );
                        } )
                    );
                },
                onError: ( action, error ) => {
                    console.error( 'Error', error );
                    return ThemingActions.loadThemingFailure( { error } );
                },
            } )
        )
    );
    constructor( private actions$: Actions, private service: ThemingService ) { }
}
