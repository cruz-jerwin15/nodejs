import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateBarangay extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeBarangayname = this.onChangeBarangayname.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            username : '',
            barangayname : '',
            date : new Date(),
            users:[]
        }

    }

    componentDidMount(){
        this.setState({
            users:['test user'],
            username:'test user'
        })
    }

    onChangeUsername(e){
        this.setState({
          username: e.target.value
        });
    }

    onChangeBarangayname(e){
        this.setState({
            barangayname: e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();
        const barangay = {
            username: this.state.username,
            barangayname: this.state.barangayname,
            date: this.state.date

        }
        console.log(barangay);

        axios.post('http://localhost:5000/barangay/add',barangay)
            .then(res => console.log(res.data));
        // window.location='/';
    }

    render(){
        return(
           <div>
               <h3>Create New Barangay</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Username: </label>
                       <select ref="userInput"
                            required
                            className="form-control"
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
                   </div>
                   <div className="form-group">
                        <label>Barangay Name: </label>
                        <input type="text" 
                                required
                                className="form-control"
                                value={this.state.barangayname}
                                onChange={this.onChangeBarangayname}
                                />
                   </div>
                   <div className="form-group">
                        <label>Date: </label>
                       <div>
                           <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                           />
                       </div>
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Add New Barangay" className="btn btn-primary" />
                   </div>
                   </form>
           </div>
        )
    }
}