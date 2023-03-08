import {CatsActions, CatsActionTypes, CatState} from "../types/todo";

const initialState: CatState = {
    cats: [],
    loading: false,
    error: null,
    replacedPhoto: '',
    breed: ''
}

export const catsReducer = (state = initialState, action: CatsActions): CatState => {
    switch (action.type) {
        case CatsActionTypes.FETCH_CATS:
            return {loading: true, error: null, cats: []}
        case CatsActionTypes.FETCH_CATS_SUCCESS:
            return {loading: false, error: null, cats: action.payload}
        case CatsActionTypes.FETCH_CATS_ERROR:
            return {loading: false, error: action.payload, cats: []}
        case CatsActionTypes.REPLACE_CAR_PHOTO:
            const updatedCats = state.cats?.map((el: any) => {
                if (el.breeds[0].id === action.payload.breed && el.id === action.payload.id) {
                    return { ...el, url: action.payload.replacedCadPhoto };
                } else {
                    return el;
                }
            });

            return { ...state, cats: updatedCats };
        default:
            return state
    }
}