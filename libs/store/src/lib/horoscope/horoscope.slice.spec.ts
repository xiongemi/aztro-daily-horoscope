import {
  fetchHoroscope,
  horoscopeAdapter,
  horoscopeReducer,
} from './horoscope.slice';

describe('horoscope reducer', () => {
  it('should handle initial state', () => {
    const expected = horoscopeAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(horoscopeReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchHoroscopes', () => {
    let state = horoscopeReducer(undefined, fetchHoroscope.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = horoscopeReducer(
      state,
      fetchHoroscope.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = horoscopeReducer(
      state,
      fetchHoroscope.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
