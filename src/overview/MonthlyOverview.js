import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "./Chart";
import fake_data from "../data/fake_data";

class MonthlyOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  //usestate for selection of week or month
  //past 1week, 1 month, 6 months, 1 year, 5 years, ytd
  //

  //remove same day

  getCumulativeTotal() {
    var transactions = fake_data.transactions.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    console.log(transactions);
    var starting_balance = fake_data.balance;
    var totalValues = [];
    var total = 0;
    transactions.forEach((t) => {
      starting_balance += t.amount;
      totalValues.push(starting_balance);
    });
    return totalValues;
  }

  getDateData() {
    var transactions = fake_data.transactions.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    var newTransactions = [];
    transactions.forEach((e) => {
      newTransactions.push(e.date);
    });
    return newTransactions;
  }

  //   createDataset() {
  //     fake_data.forEach(this.labels.push(fake_data.transactions.date));
  //     return this.labels;
  //   }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: this.getDateData(),
        datasets: [
          {
            label: "Population",
            data: this.getCumulativeTotal(),
          },
        ],
      },
    });
  }

  componentWillMount() {
    // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  //     // Turn your strings into dates, and then subtract them
  //     // to get a value that is either negative, positive, or zero.

  render() {
    return (
      <div>
        {console.log(this.getDateData())}
        <p>OVERVIEW</p>
        <Line data={this.state.chartData} />

        <Chart />
      </div>
    );
  }
}

export default MonthlyOverview;
