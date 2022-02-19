import { Dispatch } from "react"
import { ActionType } from "../action-types"
import { SearchAction } from "../actions"

export const searchLaws = (keyword: string) => {
  return async (dispatch: Dispatch<SearchAction>) => {
    dispatch({
      type: ActionType.SEARCH_LAWS
    });
  }
}