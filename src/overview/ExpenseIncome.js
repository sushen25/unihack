import React from "react"
import { Pie } from "react-chartjs-2"
import fake_data from "../data/fake_data"
import TransactionList from "../components/transaction_list"

function getRandomColor() {
    const colors = ["#1DE1CE", "#C7FF94", "#FFBD59", "#FF66C4", "#FF2870"]
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
            if(category !== "rent" && category !== "groceries") {
                state.datasets[0].backgroundColor.push(getRandomColor())
                state.labels.push(category);
                state.datasets[0].data.push(data[category]);
            }
        }

        return state;
    }

    render() {
        var data = this.formatPieData()

        return(
            <div>
                <h1>{this.props.title} Detail</h1>

                <div className="row">
                    <div className="col-6">
                        <Pie 
                            width={350}
                            height={350}
                            option={{responsive: true, maintainAspectRatio: false}} 
                            data={data}
                        />
                        <div>
                            <h6><strong>Rent: </strong>${Math.abs(this.props.pie_chart_data.rent)}</h6>
                        </div>
                        <div>
                            <h6><strong>Groceries: </strong>${Math.abs(this.props.pie_chart_data.groceries)}</h6>
                        </div>
                    </div>
                    <div className="col-6">
                        <h4>Transactions: </h4>
                        <TransactionList list_items={this.props.transaction_list}/>
                    </div>
                     
                </div>
            </div>
        );
    }
}

export default ExpenseIncome;