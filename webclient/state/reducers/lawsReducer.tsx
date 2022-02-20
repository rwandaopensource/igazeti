import { ActionType } from '../action-types';
import { SearchAction } from '../actions';

interface LawsState {
  loading: boolean,
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (
  state: LawsState = initialState,
  action: SearchAction
): LawsState => {
  switch(action.type) {
    case ActionType.SEARCH_LAWS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_LAWS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_LAWS_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}

export default reducer;