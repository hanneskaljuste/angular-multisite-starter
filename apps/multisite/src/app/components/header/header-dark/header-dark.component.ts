import { Component, Input } from '@angular/core';
@Component( {
    selector: 'hk-header-dark',
    templateUrl: './header-dark.component.html',
    styleUrls: [ './header-dark.component.scss' ]
} )
export class HeaderDarkComponent {
    @Input() title = "Dark header";
}
