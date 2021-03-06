import React from "react"
import fake_data from "../data/fake_data"

import ExpenseIncome from './ExpenseIncome'

class Overview extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            detail: "",
            transaction_list: []
        }
    }

    getData = () => {
        const fakeData = fake_data
        const state = {
            "balance_over_time": this.balanceOverTimeData(fakeData.balance, fakeData.transactions),
            "expense_data": this.factorCatergoryData(fake_data.transactions),
            "transaction_list": this.transactionListData(fake_data.transactions)
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

    factorCatergoryData = (transactions) => {
        const catergoryAmount = {};

        for(var i = 0; i < transactions.length; i++) {
            const transaction = transactions[i]
            if(this.state) {
                if(this.state.detail === "expense" && transaction.amount < 0) {
                    // Expense transactions
                    const category = transaction.category;
                    if(catergoryAmount[category] === undefined) {
                        catergoryAmount[category] = transaction.amount
                    } else {
                        catergoryAmount[category] += transaction.amount
                    }
                }
                if(this.state.detail === "income" && transaction.amount > 0) {
                    const category = transaction.category;
                    if(catergoryAmount[category] === undefined) {
                        catergoryAmount[category] = transaction.amount
                    } else {
                        catergoryAmount[category] += transaction.amount
                    }
                }
            }
        }

        return catergoryAmount;
    }

    transactionListData(transactions) {
        const state = []
        for(var i = 0; i < transactions.length; i++) {
            const transaction = transactions[i]
            if(this.state.detail == "expense" && transaction.amount < 0) {
                state.push(transaction)
            } else if (this.state.detail == "income" && transaction.amount > 0) {
                state.push(transaction)
            }
        }

        return state;
    }

    detailButton = (event, detail_page) => {
        this.setState({detail: detail_page})
    }

    setStartDate = () => {
        
    }

    render() {
        const data = this.getData();

        var detail_page = <p>Select Data</p>

        if(this.state.detail === "expense" || this.state.detail === "income") {
            detail_page = <ExpenseIncome title={this.state.detail} transaction_list={data.transaction_list} pie_chart_data={data.expense_data}/>
        }

        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <h4>Start Date: </h4>
                        <input type="date" />
                    </div>
                    <div className="col-6">
                        <h4>End Date: </h4>
                        <input type="date" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <button className="mr-3" onClick={event => this.detailButton(event, "expense")}>Expense Detail</button>
                        <button onClick={event => this.detailButton(event, "income")}>Income Detail</button>
                    </div>

                </div>
                {detail_page}
            </div>
                
        );
        
    }
}

export default Overview