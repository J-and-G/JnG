import React from 'react';
import classes from './Home.scss';
import $ from "jquery";
import './loading.js';


class Home extends React.Component {
  componentWillMount(){
    
  }
  render() {
    return (
        <div>
          <div class={classes.LoadingPage}>
            <div class={classes.Counter}>
              <p>LOADING</p>
              <h1>0%</h1>
              <hr/>
            </div>
          </div>
          <div id={classes.home} className={classes.ShadowOverlay}>
              Shikhar
          </div>
        </div>
    );
  }
}

export default Home;
