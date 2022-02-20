import { ActionType } from "../action-types";

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
  | SearchLaws
  | SearchLawsSuccess
  | SearchLawsFailure;