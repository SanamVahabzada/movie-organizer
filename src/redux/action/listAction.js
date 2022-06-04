import * as actionType from './actionType/actionType';

export const addToList = (data) => {
    return {
        type: actionType.ADD_TO_LIST,
        payload: data
    }
}

export const removeFromList = (data) => {
    return {
        type: actionType.REMOVE_FROM_LIST,
        payload: data
    }
}

// import * as actionType from "./actionType"

// export const addToList = (data) => {
//     return {
//         type: actionType.ADD_TO_LIST,
//         payload: data
//     }
// }

// export const removeFromList = (data) => {
//     return {
//         type: actionType.REMOVE_FROM_LIST,
//         payload: data
//     }
// }