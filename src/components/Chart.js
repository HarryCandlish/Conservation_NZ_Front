import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import chartStyles from "./chart.module.scss";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    return (
      <div>
        <div className={chartStyles.chart}>
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text: "Mental Health",
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

export default Chart;
