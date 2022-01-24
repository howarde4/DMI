import { addTodo } from '../actions';
import { ADD_TODO } from '../constants';

describe('NewTodo actions', () => {
  describe('NewTodo Action', () => {
    it.skip('has a type of ADD_TODO', () => {
      const expected = {
        type: ADD_TODO,
      };
      expect(addTodo()).toEqual(expected);
    });
  });
});
