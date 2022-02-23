import { useDispatch } from 'react-redux';
import { searchLaws } from '../state/action-creators';


export const SearchLaws = (dispatch: any, e: any) => {
  dispatch(searchLaws(e.target.value))
  console.log(dispatch(searchLaws(e.target.value)))
}