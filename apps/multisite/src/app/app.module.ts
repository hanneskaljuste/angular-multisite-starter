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
        ThemingModule,
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
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initThemes,
            deps: [ ThemingFacade, DOCUMENT ],
            multi: true
        }
    ],
    bootstrap: [ AppComponent ],
} )
export class AppModule { }
