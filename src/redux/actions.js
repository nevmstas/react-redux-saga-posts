import { CREATE_POST, FETCH_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

export const createPost = (post) =>({
    type: CREATE_POST,
    payload: post
})

export const fetchPosts = () => async dispatch => {
    try{
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        dispatch({type: FETCH_POST, payload: json})
        dispatch(hideLoader())
    }catch(e){
        dispatch(showAlert('Something happend wrong!'))
        dispatch(hideLoader())
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