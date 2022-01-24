/**
 *
 * Asynchronously loads the component for NewTodo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
