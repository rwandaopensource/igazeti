import { ActionType } from "../action-types";

interface changeSearchField {
  type: ActionType.CHANGE_SEARCH_FIELD,
  payload: string
}

interface SearchLaws {
  type: ActionType.SEARCH_LAWS;
}

interface SearchLawsSuccess {
  type: ActionType.SEARCH_LAWS_SUCCESS;
  payload: string[];
}

interface SearchLawsFailure {
  type: ActionType.SEARCH_LAWS_FAILURE;
  payload: string;
}

export type SearchAction =
  | changeSearchField
  | SearchLaws
  | SearchLawsSuccess
  | SearchLawsFailure;