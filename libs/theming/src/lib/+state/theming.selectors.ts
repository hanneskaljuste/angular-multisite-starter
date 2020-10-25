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
    ( features, props ) => features.filter( feature => feature.name === props.feature ).length > 0
)
