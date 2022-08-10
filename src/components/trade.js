
import React, {useState} from 'react';
import './trade.css';
import NavbarEx from './Navbar';
class TradeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trades: []
        }
    }
    componentDidMount() {
        fetch('https://db-grads-l29x-group-9.nw.r.appspot.com/trade')
        .then(res => res.json())
        .then(
            (trades) => {
                
                this.setState({trades: trades });
                console.log(trades[0]);
            },
            (error) => {
                alert(error);
            }
        )
    }
 
    render() {
        return (<div>
            <NavbarEx/>
        <table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Trade Date</th>
                    <th>Buy/Sell</th>
                    <th>settlement Date</th>
                </tr>
            </thead>
 
            <tbody>
                {this.state.trades.map(trades =>
                    <tr>
                        <td>{trades.id}</td>
                        <td>{trades.quantity}</td>
                        <td>{trades.status}</td>
                        <td>{trades.price}</td>
                        <td>{trades.trade_date}</td>
                        <td>{trades.buy_sell}</td>
                        <td>{trades.settlement_date}</td>
                        
                        
                    </tr>
                )}
            </tbody>
        </table>
        </div>);
    }
}
 
export default TradeTable