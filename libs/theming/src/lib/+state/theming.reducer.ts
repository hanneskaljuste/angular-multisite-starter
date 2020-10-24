import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ThemingActions from './theming.actions';
import { ThemingEntity } from './theming.models';
import { SiteConfiguration } from '@hk/interfaces';

export const THEMING_FEATURE_KEY = 'theming';

export interface State extends SiteConfiguration {
    loaded: boolean; // has the Theming list been loaded
    error: any;
}

export interface ThemingPartialState {
    readonly [ THEMING_FEATURE_KEY ]: State;
}

// export const themingAdapter: EntityAdapter<ThemingEntity> = createEntityAdapter<
//     ThemingEntity
// >();

export const initialState: State = {
    theme: '',
    features: [],
    loaded: false,
    error: null
}

const themingReducer = createReducer(
    initialState,
    on( ThemingActions.loadTheme, ( state ) => ( {
        ...state,
        loaded: false,
        error: null,
    } ) ),
    on( ThemingActions.loadThemingSuccess, ( state, { theming } ) => ( {
        ...state,
        ...theming,
        loaded: true
    } ) ),

    on( ThemingActions.loadThemingFailure, ( state, { error } ) => ( {
        ...state,
        error,
    } ) )
);

export function reducer ( state: State | undefined, action: Action ) {
    return themingReducer( state, action );
}
