import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { ConfigurationsPageComponent } from './pages/configurations-page/configurations-page.component';
import { ConfirmDeleteDialog, FeaturesPageComponent } from './pages/features-page/features-page.component';
import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule( {
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatListModule,
        MatDividerModule,
        MatIconModule,
        MatDialogModule,
        DragDropModule
    ],
    declarations: [ AppComponent, ConfigurationsPageComponent, FeaturesPageComponent, ConfirmDeleteDialog ],
    providers: [],
    bootstrap: [ AppComponent ],
} )
export class AppModule { }
