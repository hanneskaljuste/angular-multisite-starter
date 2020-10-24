import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { ThemingEntity } from './theming.models';
import { ThemingEffects } from './theming.effects';
import { ThemingFacade } from './theming.facade';

import * as ThemingSelectors from './theming.selectors';
import * as ThemingActions from './theming.actions';
import {
  THEMING_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './theming.reducer';

interface TestSchema {
  theming: State;
}

describe('ThemingFacade', () => {
  let facade: ThemingFacade;
  let store: Store<TestSchema>;
  const createThemingEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ThemingEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(THEMING_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ThemingEffects]),
        ],
        providers: [ThemingFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ThemingFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allTheming$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(ThemingActions.loadTheming());

        list = await readFirst(facade.allTheming$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadThemingSuccess` to manually update list
     */
    it('allTheming$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allTheming$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          ThemingActions.loadThemingSuccess({
            theming: [createThemingEntity('AAA'), createThemingEntity('BBB')],
          })
        );

        list = await readFirst(facade.allTheming$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
