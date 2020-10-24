import { ThemingEntity } from './theming.models';
import { State, themingAdapter, initialState } from './theming.reducer';
import * as ThemingSelectors from './theming.selectors';

describe('Theming Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getThemingId = (it) => it['id'];
  const createThemingEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ThemingEntity);

  let state;

  beforeEach(() => {
    state = {
      theming: themingAdapter.setAll(
        [
          createThemingEntity('PRODUCT-AAA'),
          createThemingEntity('PRODUCT-BBB'),
          createThemingEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Theming Selectors', () => {
    it('getAllTheming() should return the list of Theming', () => {
      const results = ThemingSelectors.getAllTheming(state);
      const selId = getThemingId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ThemingSelectors.getSelected(state);
      const selId = getThemingId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getThemingLoaded() should return the current 'loaded' status", () => {
      const result = ThemingSelectors.getThemingLoaded(state);

      expect(result).toBe(true);
    });

    it("getThemingError() should return the current 'error' state", () => {
      const result = ThemingSelectors.getThemingError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
