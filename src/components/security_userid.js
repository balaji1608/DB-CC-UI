
import React, {useState} from 'react';
import './trade.css';
import NavbarEx from './Navbar';

class SecurityUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            security:[],
            userID:''
        };

        this.user = this.user.bind(this);
        this.userDetails = this.userDetails.bind(this);
    }
    user(event){
        this.setState({userID: event.target.value});
    }
    userDetails(){
        let url = `https://db-grads-l29x-group-9.nw.r.appspot.com/security/user/${this.state.userID}`
        
        fetch(url)
        .then(res => res.json())
        .then(
            (security) => {
                
                this.setState({security: security });
               
            },
            (error) => {
                alert(error);
            }
        )
        
         }
    componentDidMount() {
        fetch('https://db-grads-l29x-group-9.nw.r.appspot.com/security')
        .then(res => res.json())
        .then(
            (security) => {
                
                this.setState({security: security });
                console.log("hii",security[0]);
            },
            (error) => {
                alert(error);
            }
        )
        
    }
    
    render() {
        console.log("userid",this.state.userID);
        return (<div>
            <NavbarEx/>
            <label>Enter UserID
        <input type="number" value={this.state.userID} onChange={this.user}/>
         </label>
            <button  onClick={this.userDetails}>User Details</button>
        <table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Security Id</th>
                    <th>ISIN</th>
                    <th>CUSIP</th>
                    <th>Issuer</th>
                    <th>Maturity Date</th>
                    <th>Coupon</th>
                    <th>Face Value</th>
                    <th>Action</th>
           
                    
                </tr>
            </thead>
 
            <tbody>
                {this.state.security.map(security =>
                    <tr>
                        <td>{security.id}</td>
                        <td>{security.isin}</td>
                        <td>{security.cuisp}</td>
                        <td>{security.issuer}</td>
                        <td>{security.maturity_date}</td>
                        <td>{security.coupon}</td>
                        <td>{security.facevalue}</td>
                        <td>{security.action.toString()}</td>
                        
                        
                        
                    </tr>
                )}
            </tbody>
        </table>
        </div>);
    }
}
 
export default SecurityUserDetails;