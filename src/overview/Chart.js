import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
  };

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Account Balance Overview",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              p: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
