import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationsPageComponent } from './pages/configurations-page/configurations-page.component';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';

const routes: Routes = [
    {
        path: 'sites',
        component: ConfigurationsPageComponent
    },
    {
        path: 'features',
        component: FeaturesPageComponent
    },
    {
        path: '**',
        redirectTo: 'sites'
    }
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ],
} )
export class AppRoutingModule { }
