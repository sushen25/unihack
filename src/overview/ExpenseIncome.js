import React from "react"
import { Doughnut } from "react-chartjs-2"

function getRandomColor() {
    const colors = ["#1DE1CE", "#C7FF94", "#FFBD59", "#FF66C4"]
    return colors[Math.floor(Math.random() * Math.floor(colors.length))];
  }

class ExpenseIncome extends React.Component {

    formatPieData = () => {
        const data = this.props.pie_chart_data

        const state = {
            labels: [],
            datasets: [{
                backgroundColor: [],
                data: []
            }]
        }

        for (const category in data) {
            state.datasets[0].backgroundColor.push(getRandomColor())
            state.labels.push(category);
            state.datasets[0].data.push(data[category]);
        }

        return state;
    }

    render() {
        var data = this.formatPieData()

        return(
            <div>
                <h1>Expense Detail</h1>

                <div className="row">
                    <Doughnut option={{responsive: true}} data={data}/>
                    <div className="col-6">
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpenseIncome;