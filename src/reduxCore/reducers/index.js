import {combineReducers} from 'redux';

import user, {
  actions as userActions,
  selectors as userSelectors,
  types as userTypes,
} from './user';

const rootReducer = combineReducers({
  user
});

export {userActions, userSelectors, userTypes};

export default rootReducer;
