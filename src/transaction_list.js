import React from 'react';
import data from './data'

class TransactionList extends React.Component {
    
    
    
    render() {

        const transactions = this.props.list_items.default;
        const renderedTransactions = transactions.map((transaction) => {
            return(
                <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">To: {transaction.name_transfer_to}</h5>
                        <small>{transaction.date}</small>
                        </div>
                        <p className="mb-1">${transaction.amount}</p>
                        <small>{transaction.category}</small>
                    </a>
            );
        });

        console.log(renderedTransactions);

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