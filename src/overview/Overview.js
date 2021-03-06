import React from "react"
import { Doughnut, Line } from "react-chartjs-2"
import fake_data from "../data/fake_data"

import ExpenseIncome from './ExpenseIncome'

class Overview extends React.Component {

    getData = () => {
        const fakeData = fake_data
        const state = {
            "balance_over_time": this.balanceOverTimeData(fakeData.balance, fakeData.transactions),
            "expense_data": this.expenseDetailData(fake_data.transactions)
        }

        return state;
    }

    balanceOverTimeData(starting_balance, transactions) {
        const dataList = transactions.map(transaction => {
            starting_balance += transaction.amount
            return starting_balance;
        });

        const state = {
            labels: ["s1", "s2", "s3", "s4", "s5"],
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(20,160,20,1)",
                data: dataList
            }]
        };
        return state;
    }

    expenseDetailData = (transactions) => {
        // console.log(transactions)
        const catergoryAmount = {};

        for(var i = 0; i < transactions.length; i++) {
            const transaction = transactions[i]
            if(transaction.amount < 0) {
                // Expense transactions
                const category = transaction.category;
                if(catergoryAmount[category] === undefined) {
                    catergoryAmount[category] = transaction.amount
                } else {
                    catergoryAmount[category] += transaction.amount
                }

            }
            
        }

        return catergoryAmount;
    }


    render() {
        const dataFake = {
            datasets: [{
                backgroundColor: ["rgba(75,192,192,1)", "rgba(20,160,20,1)", "rgba(250,100,192,1)"],
                data: [10, 20, 30]
            }],
            labels: ["John", "Sushen", "Andy"]
        };

        const optionsFake = {
            title: {
                display: true,
                text: "My Chart",
                fontSize: 10
            },
        }

        // REAL START
        this.expenseDetailData(fake_data.transactions)

        const data = this.getData()

        return (
            <div>
                {/* <div className="row">
                    <div className="col-6">
                        <Doughnut options={optionsFake} data={dataFake}/>
                    </div>
                    <div className="col-6">
                        <Line data={data.balance_over_time} />
                    </div>
                </div> */}

                <ExpenseIncome pie_chart_data={data.expense_data}/>

                
            </div>
        );
    }
}

export default Overview