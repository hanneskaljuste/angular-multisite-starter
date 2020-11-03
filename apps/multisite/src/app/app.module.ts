import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLightComponent } from './components/header/header-light/header-light.component';
import { HeaderDarkComponent } from './components/header/header-dark/header-dark.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { ThemingModule, ThemingFacade } from '@hk/theming';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Theme } from '@hk/interfaces';



import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



export const themes: Theme[] = [
    {
        name: 'light',
        loaded: false,
    },
    {
        name: 'dark',
        loaded: false,
    },
    {
        name: 'deeppurple',
        loaded: false,
    },
    {
        name: 'pink',
        loaded: false,
    },
    {
        name: 'purple',
        loaded: false,
    },
    {
        name: 'default',
        loaded: false,
    },
];



export function initThemes ( themingFacade: ThemingFacade, doc: Document ) {
    return () => themingFacade.loadTheme( doc.location.host, environment.production );
}


@NgModule( {
    declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        FooterComponent,
        HeaderLightComponent,
        HeaderDarkComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ThemingModule.forRoot( themes ),
        StoreModule.forRoot(
            {},
            {
                metaReducers: !environment.production ? [] : [],
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true,
                },
            }
        ),
        EffectsModule.forRoot( [] ),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        MatListModule,
        MatDividerModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initThemes,
            deps: [ ThemingFacade, DOCUMENT ],
            multi: true
        },
        MatDatepickerModule
    ],
    bootstrap: [ AppComponent ],
} )
export class AppModule { }
