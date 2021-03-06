import React from 'react';


class TransactionList extends React.Component {
    
    render() {
        const transactions = this.props.list_items;
        var renderedTransactions = (<p>No data</p>)
        if(transactions) {
            renderedTransactions = transactions.map((transaction) => {
                return(
                    <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <small>{transaction.date}</small>
                            </div>
                            <p className="mb-1">${transaction.amount}</p>
                            <small>{transaction.category}</small>
                        </a>
                );
            });
        } 

        return (
            <div>
                <div style={{height: "500px", overflowY:"scroll"}} className="list-group">
                    {renderedTransactions}
                </div>
            </div>

        );
    }
}

export default TransactionList;