
import React, {useState} from 'react';
import './trade.css';
import NavbarEx from './Navbar';
import { NavLink, useNavigate} from 'react-router-dom';
class SecurityTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            security: []
        }
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
        return (<div>
            <NavbarEx/>
            <NavLink to="/securityUserID" variant="body2">
            <button  >User Details</button>
              </NavLink>
              <NavLink to="/matured" variant="body2">
            <button  >Matured</button>
              </NavLink>
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
                        <td>
                            <button disabled={security.action.toString()=="true"?true:false}>
                              Action 
                                </button></td>
                        {/* {security.action.toString()}</td> */}
                        
                        
                        
                    </tr>
                )}
            </tbody>
        </table>
        </div>);
    }
}
 
export default SecurityTable