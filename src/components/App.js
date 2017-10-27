import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from'redux'
import {Router,Route} from 'react-router'

import logo from './logo.svg';
import './App.css';
import {Content} from './content'
import {Post} from './post'
import * as actions from '../redux/actions'

class _App extends Component {

  componentDidMount(){
    let {actions} = this.props
    actions.getNews()
  }
  getPosts(){
    const {news,actions} = this.props
    if(news!=undefined){
      return (
        news.posts.map((item,index)=>{
          return <Content post={item} onclick={actions.choosePost} key={index}/>
        })
      )
    }
  }
  render() {
    const {news} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MOBILIZETODAY</h1>
        </header>
        <section className="App-news-title">
          <h2>НОВОСТИ MOBILIZETODAY.RU</h2>
        </section>
        <section className="App-content">
          {this.getPosts()}
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = function (dispatch){  
  return {
      actions: bindActionCreators(actions,dispatch)
  }
}
const mapStateToProps = function (state){ 
  return {
    news:state.news.news
  }
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(_App)
export default App;