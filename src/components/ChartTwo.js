import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import chartTwoStyles from "./chartTwo.module.scss";

class ChartTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartTwoData: {
        labels: ["1985", "1995", "2005", "2010", "2019"],
        datasets: [
          {
            label: "Youth Suicide",
            data: [100, 157, 209, 250, 308],
            backgroundColor: "#05386b",
            pointBorderColor: "black",
            fill: false,
            borderColor: "#05386b"
          },
          {
            label: "Adult Suicide",
            data: [45, 120, 140, 200, 262],
            backgroundColor: "#5cdb96",
            pointBorderColor: "black",
            fill: false,
            borderColor: "#5cdb96"
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <div className={chartTwoStyles.chartTwo}>
          <Line
            data={this.state.chartTwoData}
            options={{
              title: {
                display: true,
                text: "Suicide",
                fontSize: "20"
              },
              legend: {
                diplay: true,
                position: "bottom"
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default ChartTwo;
