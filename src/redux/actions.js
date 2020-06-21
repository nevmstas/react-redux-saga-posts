import { REQUEST_POSTS, CREATE_POST, FETCH_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

export const createPost = (post) =>({
    type: CREATE_POST,
    payload: post
})

export const fetchPosts = () => {
    return {
        type: REQUEST_POSTS
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const showAlert = (text) => dispatch =>{
    dispatch({
        type: SHOW_ALERT,
        payload: text
    })
    setTimeout(()=>{
        dispatch(hideAlert())
    }, 3000)
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT,
    }
}