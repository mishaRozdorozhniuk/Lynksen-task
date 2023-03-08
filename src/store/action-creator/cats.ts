import {CatsActions, CatsActionTypes} from "../types/todo";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCats = () => {
    return async (dispatch: Dispatch<CatsActions>) => {
        try {
            dispatch({type: CatsActionTypes.FETCH_CATS})
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=arab,toyg,snow,sing,siam,ragd,aege,bali,birm,bomb,burm,chee,cypr,ocic&api_key=live_ZvFhgGZasdZnxXyjyuMWpGxxFfI7JWiiGn9WMAhKKgfaVlvgOiI8nZ7dQkJqi4lM')
            dispatch({type: CatsActionTypes.FETCH_CATS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: CatsActionTypes.FETCH_CATS_ERROR, payload: 'You get error during fetching cats' })
        }
    }
}

export const replacePhoto = (newInfo: any) => {
    return (dispatch: Dispatch<CatsActions>) => {
        dispatch({type: CatsActionTypes.REPLACE_CAR_PHOTO, payload: newInfo})
    }
}
