export interface CatState {
    cats?: any[]
    loading: boolean,
    error: null | string,
    replacedPhoto?: string,
    breed?: string
}

export enum CatsActionTypes {
    FETCH_CATS = "FETCH_CATS",
    FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS",
    FETCH_CATS_ERROR = "FETCH_CATS_ERROR",
    REPLACE_CAR_PHOTO = "REPLACE_CAR_PHOTO"
}

interface FetchCatsAction {
    type: CatsActionTypes.FETCH_CATS,
}

interface FetchCatsSuccess {
    type: CatsActionTypes.FETCH_CATS_SUCCESS,
    payload: any[]
}

interface FetchCatsError {
    type: CatsActionTypes.FETCH_CATS_ERROR,
    payload: string
}

interface ReplaceCatPhoto {
    type: CatsActionTypes.REPLACE_CAR_PHOTO,
    payload: any
}

export type CatsActions = FetchCatsAction | FetchCatsSuccess | FetchCatsError | ReplaceCatPhoto
