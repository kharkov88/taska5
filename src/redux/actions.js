
const GET_NEWS = 'GET_NEWS'
export function getNews(){
    return function(dispatch){
        fetch('https://support.mobilizetoday.ru/news/?json=1')
        .then(response=>{
            return response.json().then(data=>{
                dispatch(updateNews(data))
            })
        })
    }
}

const UPDATE_NEWS = 'UPDATE_NEWS'
export function updateNews(news){
    return {
        type:UPDATE_NEWS,
        news
    }
}

const CHOOSE_POST = 'CHOOSE_POST'
export function choosePost(post){
    console.log("post:"+post)
    return {
        type:CHOOSE_POST,
        post
    }
}