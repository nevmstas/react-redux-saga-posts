import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import {Loader} from './Loader'


export default () =>{
    //EQUAL TO 
    //const mapStateToProps = state => ({fetchedPosts: state.posts.fetchedPosts})
    //connect(mapStateToProps,{ fetchPosts })(FetchedPosts)
    
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const isLoading = useSelector(state => state.app.isLoading)

    if(isLoading) return <Loader />


    if(!posts.length){
        return <button 
            className='btn btn-primary'
            onClick={()=>dispatch(fetchPosts())}>Download</button>
    }
    
    return posts.map(post =><Post post = {post} key ={post.id}/>)
}