import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTheming from './+state/theming.reducer';
import { ThemingEffects } from './+state/theming.effects';
import { ThemingFacade } from './+state/theming.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTheming.THEMING_FEATURE_KEY,
      fromTheming.reducer
    ),
    EffectsModule.forFeature([ThemingEffects]),
  ],
  providers: [ThemingFacade],
})
export class ThemingModule {}
