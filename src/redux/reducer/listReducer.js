import * as actionType from '../action/actionType/actionType';

const initialState = {
    movies: [], 
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_LIST:

            const isInCart = state.movies.find(movie => movie.movie.imdbID === action.payload.movie.imdbID);
            return isInCart ? state : {
                ...state,
                movies: [...state.movies, action.payload]
            }

        case actionType.REMOVE_FROM_LIST:
            return {
                ...state,
                movies: [...state.movies.filter(movie => movie.movie !== action.payload)]
            };
        default:
            return state;
    }
}

export default listReducer;