import React, { Component } from "react";
import homeStyles from "./home.module.scss";

import Chart from "./Chart";
import ChartTwo from "./ChartTwo";
import SampleProducts from "./SampleProducts";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ["1985", "1995", "2005", "2010", "2019"],
        datasets: [
          {
            label: "Depression",
            data: [100, 157, 209, 250, 308],
            backgroundColor: "#c38d9e",
            pointBorderColor: "black",
            fill: false,
            borderColor: "#c38d9e"
          },
          {
            label: "Anxiety",
            data: [94, 123, 270, 309, 350],
            backgroundColor: "#e8a87c",
            fill: false,
            borderColor: "#e8a87c",
            pointBorderColor: "black"
          },
          {
            label: "Addiction",
            data: [80, 130, 201, 247, 304],
            backgroundColor: "#41b3a3",
            fill: false,
            borderColor: "#41b3a3",
            pointBorderColor: "black"
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <img alt="logo" src="logo.png" className={homeStyles.logo} />
        <hr />
        <div className={homeStyles.banner}>
          <h2 className={homeStyles.secondaryTitle}>The Problem</h2>
          <p className={homeStyles.epigraph}>
            An attempt to fight and establish a base in Wellington to deal with
            the mental health issues in Wellington and New Zealand
          </p>
        </div>
        <div>
          <Chart chartData={this.state.chartData} />
        </div>
        <div>
          <ChartTwo />
        </div>
        <div>
          <SampleProducts />
        </div>
      </div>
    );
  }
}

export default Home;
