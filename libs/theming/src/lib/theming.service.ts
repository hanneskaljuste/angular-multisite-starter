import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';



interface Theme {
    name: string;
    loaded: boolean;
}
export const STORE: Theme[] = [
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



@Injectable( {
    providedIn: 'root'
} )
export class ThemingService {

    private _themes: Theme[] = [];
    private _renderer: Renderer2;

    constructor(
        rendererFactory: RendererFactory2,
        @Inject( DOCUMENT ) private _document,
        private _http: HttpClient ) {
        this._renderer = rendererFactory.createRenderer( null, null );
        this._initialize();

    }

    private _initialize () {
        STORE.forEach( ( theme: Theme ) => {
            this._themes[ theme.name ] = {
                loaded: false,
                name: theme.name
            }
        } );
    }


    load ( theme: string, isProduction: boolean ) {
        const promises: Promise<Theme>[] = [];
        promises.push( this._loadTheme( theme, isProduction ) );
        return Promise.all( promises );
    }

    private _loadTheme ( name: string, isProduction: boolean ): Promise<Theme> {
        return new Promise(
            resolve => {
                if ( this._isThemeLoaded( name ) ) {
                    return resolve( this._setThemeStatus( name ) )
                }
                const theme = this._renderTheme( name, isProduction );
                theme.onload = () => {
                    resolve( this._setThemeStatus( name ) );
                }
                theme.onerror = () => resolve( this._setThemeStatus( name, false ) );
                this._renderer.appendChild( this._document.getElementsByTagName( 'head' )[ 0 ], theme );
            }
        )
    }

    private _isThemeLoaded ( name: string ) {
        return this._themes[ name ].loaded;
    }

    private _setThemeStatus ( name: string, status = true ) {
        this._themes[ name ].loaded = status;
        return {
            name,
            loaded: status
        }
    }


    private _renderTheme ( name: string, isProduction: boolean ) {
        console.log( '_renderTheme', this._themes );
        if ( isProduction ) {
            const style = this._renderer.createElement( 'link' );
            style.rel = 'stylesheet';
            style.type = 'text/css';
            style.href = this._themes[ name ].name + '.css';
            return style;
        }
        const script = this._renderer.createElement( 'script' );
        script.type = 'text/javascript';
        script.src = this._themes[ name ].name + '.js';
        return script;
    }

    fetchTheme ( host ) {
        return this._http.get( `api/site-configuration?domain=${host}` );
    }
}
