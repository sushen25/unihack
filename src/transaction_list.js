import React from 'react';
import data from './data';

class TransactionList extends React.Component {
    
    render() {
        const transactions = this.props.list_items.default;
        const renderedTransactions = transactions.map((transaction, key) => {
            return(
                <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{transaction.date}</th>
                    <th scope="row">{transaction.category}</th>
                    <th scope="row">${transaction.amount}</th>
                  </tr>
                </tbody>
              </table>
            );
        });

        return (
            <div>
                <h1>TransactionList</h1>
                <div className="list-group">

                    {renderedTransactions}
                    
                    </div>
            </div>

        );
    }
}

export default TransactionList;