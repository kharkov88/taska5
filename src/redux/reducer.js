import {combineReducers} from 'redux'
import {routerReducer } from 'react-router-redux'

export default combineReducers(
    {
        news:updateNews,
        activePost:choosePost,
        routing:routerReducer
    }
)
function choosePost(state={},action){
    if(action.type=='CHOOSE_POST')
    return {
        date:action.post.date,
        title:action.post.title,
        post:action.post.content
    }
    return state   
}
function updateNews(state=[],action){
    if(action.type=='UPDATE_NEWS')
    return Object.assign({},state,{
        news:action.news
    })
    return state
}