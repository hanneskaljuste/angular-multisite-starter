import { ThemingEntity } from './theming.models';
import * as ThemingActions from './theming.actions';
import { State, initialState, reducer } from './theming.reducer';

describe('Theming Reducer', () => {
  const createThemingEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ThemingEntity);

  beforeEach(() => {});

  describe('valid Theming actions', () => {
    it('loadThemingSuccess should return set the list of known Theming', () => {
      const theming = [
        createThemingEntity('PRODUCT-AAA'),
        createThemingEntity('PRODUCT-zzz'),
      ];
      const action = ThemingActions.loadThemingSuccess({ theming });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
