import React, { Component } from "react";
import homeStyles from "./home.module.scss";

import Chart from "./Chart";
import ChartTwo from "./ChartTwo";
import Philosophy from "./Philosophy";
import SampleProducts from "./SampleProduct";

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
            backgroundColor: "black",
            pointBorderColor: "black",
            fill: false,
            borderColor: "black"
          },
          {
            label: "Anxiety",
            data: [94, 123, 270, 309, 350],
            backgroundColor: "#3cc47c",
            fill: false,
            borderColor: "#3cc47c",
            pointBorderColor: "#3cc47c"
          },
          {
            label: "Addiction",
            data: [80, 130, 201, 247, 304],
            backgroundColor: "grey",
            fill: false,
            borderColor: "grey",
            pointBorderColor: "grey"
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className={homeStyles.title}>
          &nbsp;All <br />
          &nbsp;is
          <br />
          &nbsp; Well.
        </h1>
        <div className={homeStyles.banner}>
          <h2 className={homeStyles.secondaryTitle}>The Problem</h2>
          <p className={homeStyles.epigraph}>
            An attempt to fight and establish a base in Wellington to deal with
            the mental health issues in Wellington and New Zealand. We know well
            enough the issue, it's apart of every individuals life, whether it
            be a family member, partner, friend. If not you see it in our
            streets, in the news, in the schools and workplace. It's hard not be
            encumbered by it, making it easy to ignore for lack of knowing what
            do.
          </p>
        </div>

        <div>
          <Chart chartData={this.state.chartData} />
        </div>
        <div>
          <ChartTwo />
        </div>
        <div>
          <Philosophy />
          <SampleProducts />
        </div>
      </div>
    );
  }
}

export default Home;
