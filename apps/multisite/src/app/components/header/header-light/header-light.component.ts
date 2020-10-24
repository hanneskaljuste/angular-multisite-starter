import { Component, Input } from '@angular/core';



@Component( {
    selector: 'hk-header-light',
    templateUrl: './header-light.component.html',
    styleUrls: [ './header-light.component.scss' ]
} )
export class HeaderLightComponent {
    @Input() title = "Light header";


}
