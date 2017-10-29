import React from 'react';
import {Link} from'react-router'
import logo from './logo.svg';
import './post.css';
import {connect} from 'react-redux';


let _Post = (props)=>{
    let {post} = props
    return(
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">MOBILIZETODAY</h1>
        </header>
        <section className="App-news-title">
            <h2>НОВОСТИ MOBILIZETODAY.RU</h2>
            <Link to="/">Назад к новостям</Link>
        </section>
        <section className="App-post-title">{post.title||window.localStorage.title}</section>
        <section className="App-post-date">{`опубликовано ${post.date!=undefined&&post.date.substr(0,10)||window.localStorage.date.substr(0,10)}`}</section>
        <section className="App-post" dangerouslySetInnerHTML={{__html: post.post||window.localStorage.post}}/>
        
    </div>)
}
const mapStateToProps = function (state){ 
    return {
      post:state.activePost
    }
  }
  
  export let Post = connect(
    mapStateToProps,
  )(_Post)
