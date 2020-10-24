import { createAction, props } from '@ngrx/store';
// import { ThemingEntity } from './theming.models';

import { SiteConfiguration } from '@hk/interfaces';

export const loadTheme = createAction( '[Theming] Load Theme', props<{ host: string, isProduction: boolean }>() );

export const loadThemingSuccess = createAction(
    '[Theming] Load Theme Success',
    props<{ theming: SiteConfiguration }>()
);

export const loadThemingFailure = createAction(
    '[Theming] Load Theme Failure',
    props<{ error: any }>()
);
