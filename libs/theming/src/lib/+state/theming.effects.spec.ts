import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ThemingEffects } from './theming.effects';
import * as ThemingActions from './theming.actions';

describe('ThemingEffects', () => {
  let actions: Observable<any>;
  let effects: ThemingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ThemingEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ThemingEffects);
  });

  describe('loadTheming$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ThemingActions.loadTheming() });

      const expected = hot('-a-|', {
        a: ThemingActions.loadThemingSuccess({ theming: [] }),
      });

      expect(effects.loadTheming$).toBeObservable(expected);
    });
  });
});
