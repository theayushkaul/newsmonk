import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_1;
  state = {
    progress: 100
  }
  setProgress = (p)=>{
    this.setState({progress: p});
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar color='rgb(255, 63, 63)' progress={this.state.progress} onLoaderFinished={() => this.setProgress(100)}/>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News  apiKey = {this.apiKey} setProgress={this.setProgress} key='general' category='general' />} />
            <Route exact path="/business" element={<News  apiKey = {this.apiKey} setProgress={this.setProgress} key='buisness' category='business' />} />
            <Route exact path="/entertainment" element={<News  apiKey = {this.apiKey} setProgress={this.setProgress} key='entertainment' category='entertainment' />} />
            <Route exact path="/health" element={<News  apiKey = {this.apiKey} setProgress={this.setProgress} key='health' category='health' />} />
            <Route exact path="/science" element={<News  apiKey = {this.apiKey} setProgress={this.setProgress} key='science' category='science' />} />
            <Route exact path="/sports" element={<News  apiKey = {this.apiKey} setProgress={this.setProgress} key='sports' category='sports' />} />
            <Route exact path="/technology" element={<News  apiKey = {this.apiKey} setProgress={this.setProgress} key='technology' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
