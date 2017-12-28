import { GlobalType } from '../actions/ActionType';

const DEFAULT_STATE = {
  showSideBar: false
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GlobalType.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSideBar: !state.showSideBar
      };
    default:
      return state;
  }
}
