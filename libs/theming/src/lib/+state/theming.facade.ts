import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromTheming from './theming.reducer';
import * as ThemingSelectors from './theming.selectors';
import * as actions from './theming.actions';
import { Observable } from 'rxjs';
@Injectable()
export class ThemingFacade {
    loaded$ = this.store.pipe( select( ThemingSelectors.getThemingLoaded ) );
    loadedThemeName$ = this.store.pipe( select( ThemingSelectors.getThemeName ) );

    // hasAccessToFeature$ = this.store.pipe( select( ThemingSelectors.hasAccessToFeature ) )
    // allTheming$ = this.store.pipe( select( ThemingSelectors.getAllTheming ) );
    // selectedTheming$ = this.store.pipe( select( ThemingSelectors.getSelected ) );

    constructor( private store: Store<fromTheming.ThemingPartialState> ) { }

    dispatch ( action: Action ) {
        this.store.dispatch( action );
    }

    loadTheme ( host: string, isProduction = false ) {
        console.log( 'ThemingFacade loadTheme', host );
        this.dispatch( actions.loadTheme( { host: host, isProduction: isProduction } ) )
    }

    hasAccessToFeature ( feature: string ): Observable<boolean> {
        return this.store.pipe( select( ThemingSelectors.hasAccessToFeature, { feature: feature } ) );
    }
}
