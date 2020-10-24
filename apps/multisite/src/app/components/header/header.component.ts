import { Component, ComponentFactoryResolver, Input, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
// import { HeaderDarkComponent } from './header-dark/header-dark.component';
// import { HeaderLightComponent } from './header-light/header-light.component';

@Component( {
    selector: 'hk-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements AfterViewInit {
    @Input() theme;

    @Input() title;

    @ViewChild( "container", { read: ViewContainerRef } ) container;
    // components = [ "HeaderLightComponent", "HeaderDarkComponent" ];
    constructor( private resolver: ComponentFactoryResolver ) { }

    ngAfterViewInit () {
        // const components = {
        //     "HeaderLightComponent": HeaderLightComponent,
        //     "HeaderDarkComponent": HeaderDarkComponent

        // }
        // const componentName = 'Header' + this.titleCaseWord( this.theme ) + 'Component'; // Make theme titlecase
        // console.log( 'Component name', componentName );
        // const component = this.resolver.resolveComponentFactory( components[ componentName ] ); // Resolver is ComponentFactoryResolver
        // const ref = this.container.createComponent( component ); // Container is <ng-container>
        // ref.instance.title = this.title;
    }


    titleCaseWord ( word: string ) {
        if ( !word ) return word;
        return word[ 0 ].toUpperCase() + word.substr( 1 ).toLowerCase();
    }

}
