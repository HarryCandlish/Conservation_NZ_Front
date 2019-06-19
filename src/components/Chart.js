import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Anxiety", "Depression", "Addiction"],
        datasets: [
          {
            label: "Cases",
            data: [300, 200, 100],
            backgroundColor: ["#e8a87c"]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Mental Health"
            },
            legend: {
              diplay: true,
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
