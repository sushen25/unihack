import React from "react"
import {Line} from 'react-chartjs-2';

const inflation = 0.9997;
var data = [100,99.5,99.2,98.5,97.9,97]; // is meant to call an inflation api

const state = {
    labels: ['September', 'October', 'November',
             'December', 'January', 'February'],
    datasets: [
            {
                label: 'Value',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: data
            }
            ]
  }

  // Variables used. Dummy values right now but we can extract exact
  var start_date = '2012/1/1';
  var end_date = '2013/1/1';
  var amount = 100;

class PotentialInvestments extends React.Component {
    render() {
        return (
            <div>
                <Line
                data={state}
                options={{
                    title:{
                    display:true,
                    text:'Value of 100 dollars over 6 months due to inflation',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
            </div>
        );
        
    }
}

export default PotentialInvestments