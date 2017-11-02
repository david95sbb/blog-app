import { createStore, combineReducers } from 'redux';

const _allPost = ( _state = [], _action ) => {
  let _newState = Object.assign( {}, _state );
  switch( _action.type ) {
      case 'DATA_LOADED':
          _newState = _state.concat( _action.data );
          return _newState;
      case 'CLEAR_DATA':
          _newState = [];
          return _newState;
      default:
          return _state;
  }
};

/**
 * Combine reducers
 * @type {Reducer<any>}
 * @private
 */
const _reduce = combineReducers( {
    allPost: _allPost
} );

/**
 * Create STORE
 * @type {Store<any>}
 */
const store = createStore( _reduce );

export default store;

