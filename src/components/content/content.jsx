import React from 'react'
import './content.css'
import {Link} from'react-router'


export let Content = (props)=>{
    const {post,onclick}=props
    let obj_post = {
        date:post.date,
        title:post.title,
        content:post.content
    } 
    function handleClick(){
        onclick(obj_post)
        window.localStorage.post = post.content
        window.localStorage.date = post.date
        window.localStorage.title = post.title
        window.scrollTo(0,0)
    }
    return (      
        <div className="post">
            <div className="post-data">
                <div className="post-date">опубликовано {post.date.substr(0,10)}</div>
                <div className="post-title"><Link to={decodeURIComponent(post.slug)} onClick={handleClick}>{post.title}</Link></div>
                <div className="post-excerpt" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                <div className="post-more"><Link to={decodeURIComponent(post.slug)} onClick={handleClick}>Подробнее</Link></div>
            </div>
            <div className="post-image">
                <img src="http://support.mobilizetoday.ru/wp-content/uploads/2017/10/maxresdefault_small-240x240.jpg" alt="thumbnail"/>
            </div>
        </div>
    )
}
