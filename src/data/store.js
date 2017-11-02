import { createStore, combineReducers } from 'redux';

const _allPost = ( _state = [ {
        id: 1,
        title: "titulo del blog",
        body: "descripcion del blog"
    },
    {
        id: 2,
        title: "titulo del 2do blog",
        body: "descripcion del 2do blog"
    }], _action ) => {
  let _newState = Object.assign( {}, _state );
  switch( _action.type ) {
      case 'DATA_LOADED':
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

