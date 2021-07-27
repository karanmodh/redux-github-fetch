
import {FETCH_SEARCH_PENDING, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR, UPDATE_USERNAME} from './SearchAction';

const initialState = {
    username: "",
    repos: [],
    error: null
}

export function searchReducer(state = initialState, action:any) {
    console.log(action)
    switch(action.type) {
        case UPDATE_USERNAME: 
            return {
                ...state,
                username: action.username
            }
        case FETCH_SEARCH_PENDING: 
            return {
                ...state,
                username: action.username
            }
        case FETCH_SEARCH_SUCCESS:
            console.log("Here")
            return {
                ...state,
                username: action.username,
                repos: action.repos
            }
        case FETCH_SEARCH_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getRepos = (state: { repos: any; }) => state.repos;
export const getReposError = (state: { error: any; }) => state.error;
