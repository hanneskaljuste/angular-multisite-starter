import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    THEMING_FEATURE_KEY,
    State,
    ThemingPartialState,
} from './theming.reducer';

// Lookup the 'Theming' feature state managed by NgRx
export const getThemingState = createFeatureSelector<
    ThemingPartialState,
    State
>( THEMING_FEATURE_KEY );

// const { selectAll, selectEntities } = themingAdapter.getSelectors();

export const getThemingLoaded = createSelector(
    getThemingState,
    ( state: State ) => state.loaded
);

export const getThemingError = createSelector(
    getThemingState,
    ( state: State ) => state.error
);

export const getThemeName = createSelector(
    getThemingState,
    ( state: State ) => state.theme
)

export const getThemeFeatures = createSelector(
    getThemingState,
    ( state: State ) => state.features
)

export const hasAccessToFeature = createSelector(
    getThemeFeatures,
    ( features, props ) => features.indexOf( props.feature ) > -1
)



// export const getAllTheming = createSelector( getThemingState, ( state: State ) =>
//     selectAll( state )
// );

// export const getThemingEntities = createSelector(
//     getThemingState,
//     ( state: State ) => selectEntities( state )
// );

// export const getSelectedId = createSelector(
//     getThemingState,
//     ( state: State ) => state.selectedId
// );

// export const getSelected = createSelector(
//     getThemingEntities,
//     getSelectedId,
//     ( entities, selectedId ) => selectedId && entities[ selectedId ]
// );
