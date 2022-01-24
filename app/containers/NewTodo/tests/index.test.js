/**
 *
 * Tests for NewTodo
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import NewTodo from '../index';

describe('<NewTodo />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<NewTodo dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('should render', () => {
    render(
      <IntlProvider locale="en">
        <NewTodo />
      </IntlProvider>,
    );
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<NewTodo />);
    expect(firstChild).toMatchSnapshot();
  });
});
