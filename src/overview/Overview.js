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


    render() {
        // REAL START
        const data = this.getData();

        if(this.state.detail === "expense") {
            return (
                <div>
                    <div className="row">
                        <button onClick={event => this.detailButton(event, "expense")}>Expense Detail</button>
                        <button onClick={event => this.detailButton(event, "income")}>Income Detail</button>
                    </div>
                    <ExpenseIncome title="Expense" transaction_list={data.transaction_list} pie_chart_data={data.expense_data}/>
                </div>
                    
            );
        } else if(this.state.detail === "income") {
            return(
                <div>
                    <div className="row">
                        <button onClick={event => this.detailButton(event, "expense")}>Expense Detail</button>
                        <button onClick={event => this.detailButton(event, "income")}>Income Detail</button>
                    </div>
                    <ExpenseIncome title="Income" transaction_list={data.transaction_list} pie_chart_data={data.expense_data}/>
                </div>
            );
        } else {
            return(
                <div>
                    <div className="row">
                        <button onClick={event => this.detailButton(event, "expense")}>Expense Detail</button>
                        <button onClick={event => this.detailButton(event, "income")}>Income Detail</button>
                    </div>
                    <div>Select a Detail Page</div>
                </div>
            );
        }
        
    }
}

export default Overview