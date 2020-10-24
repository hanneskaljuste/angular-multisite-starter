import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, SiteConfiguration } from '@hk/interfaces';
import { ThemeLoaderService } from './theme-loader.service';
import { ThemingFacade } from '@hk/theming';


@Component( {
    selector: 'hk-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
} )
export class AppComponent {
    hello$ = this.http.get<Message>( '/api/hello' );
    themeName = null;
    constructor( private http: HttpClient, private _themeLoaderService: ThemeLoaderService, public theme: ThemingFacade ) {
        // this.theme.loadedThemeName$.subscribe( name => this.theme.app( name ) )
        // _themeLoaderService.getTheme().subscribe( ( response: SiteConfiguration ) => {
        //     const theme = response.theme;
        //     _themeLoaderService.load( theme )
        //     this.themeName = theme;
        // } )
    }
}
