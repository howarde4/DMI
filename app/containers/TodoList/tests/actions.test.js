import { getTodos } from '../actions';
import { FETCH_TODOS } from '../constants';

describe('TodoList actions', () => {
  describe('getTodos', () => {
    it.skip('has a type of FETCH_TODOS', () => {
      const expected = {
        type: FETCH_TODOS,
      };
      expect(getTodos()).toEqual(expected);
    });
  });
});
