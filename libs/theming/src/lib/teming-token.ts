import { InjectionToken } from '@angular/core';
import { Theme } from '@hk/interfaces';

export const THEME_STORE = new InjectionToken<Theme[]>( "THEME_STORE" );
