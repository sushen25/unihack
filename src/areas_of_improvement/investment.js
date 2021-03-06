import React from 'react';
import Plot from 'react-plotly.js';


class investment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentChartXValues: [],
      investmentChartYValues: []
    }
    this.investmentSymbol = 'TSLA';
  }

  componentDidMount() {
    this.fetchInvestment();
  }

  fetchInvestment() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let investmentSymbol = 'TSLA';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${investmentSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let investmentChartXValuesFunction = [];
    let investmentChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            investmentChartXValuesFunction.push(key);
            investmentChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          pointerToThis.setState({
            investmentChartXValues: investmentChartXValuesFunction,
            investmentChartYValues: investmentChartYValuesFunction
          });
        }
      )
  }

  render() {
    return (
      <div>
        <h1>Investment Market</h1>
        <Plot
        data={[
          {
            x: this.state.investmentChartXValues,
            y: this.state.investmentChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 720, height: 440, title: this.investmentSymbol}}
    
        />
      </div>
    )
  }
}

export default investment;