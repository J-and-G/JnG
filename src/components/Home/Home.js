import React from 'react';
import classes from './Home.scss';
import $ from "jquery";
import './loading.js';


class Home extends React.Component {
    componentDidMount() {

        $(document).ready(function () {
            var counter = 0;
            var c = 0;
            var perfData = window.performance.timing // The PerformanceTiming interface
            var estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart) // Calculated Estimated Time of Page Load which returns negative value.
            var time = parseInt((estimatedTime / 1000) % 60) * 100; //Converting EstimatedTime from miliseconds to seconds.
            var i = setInterval(function () {
                $("#percentageCounter").html(c + "%");
                $("#percentageCounterHr").css("width", c + "%");
                $("#percentageCounterHr").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

                counter++;
                c++;

                if (counter == 101) {
                    clearInterval(i);
                }
            }, estimatedTime / 100);
        });

    }

    render() {
        return (
            <div>
                <div className={classes.LoadingPage}>
                    <div className={classes.Counter}>
                        <p>LOADING</p>
                        <h1 id="percentageCounter">0%</h1>
                        <hr id="percentageCounterHr" />
                    </div>
                </div>
                <div id="home" className={classes.ShadowOverlay}>
                    Shikhar
                </div>
            </div>
        );
    }
}

export default Home;
