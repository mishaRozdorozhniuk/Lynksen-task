import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CarActionCreators from '../store/action-creator/cats'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CarActionCreators, dispatch)
}