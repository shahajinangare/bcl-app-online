import React, { Component } from 'react';
import UserListContent from '../../view/users/userlist';
import ReactTable from "react-table";
import VWRegisterContent from "../../components/users/register";
import "react-table/react-table.css";
import ReactDOM from 'react-dom';

class UserList extends Component {

    outData = [];
    constructor(props) {
        super(props);

        this.state = {
            outData: [],
            emailid: ''
        };

        this.getusers = this.getusers.bind(this);
        this.unlockuser = this.unlockuser.bind(this);
    }

    activeinactiveuser(selectedrow) {

        // console.log(selectedrow.row.emailid);

        fetch('http://localhost:7000/admin/activeinactiveuser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailid: selectedrow.row.emailid
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.result.o_errcode);    
                //return responseJson.result;
                if (responseJson.code === 200)
                    alert(responseJson.message);
            })
            .catch((error) => {
                console.error(error);
            });

        window.location.reload();
    }

    unlockuser(selectedrow) {

        // console.log(selectedrow.row.emailid);

        fetch('http://localhost:7000/admin/userunlock', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailid: selectedrow.row.emailid //'nileslh.patil@bajalcapital.com'
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.result.o_errcode);    
                //return responseJson.result;
                if (responseJson.code === 200)
                    alert(selectedrow.row.NAME + ' is unlocked now.');
            })
            .catch((error) => {
                console.error(error);
            });

        window.location.reload();
    }

    getusers() {

        fetch('http://localhost:7000/admin/getusers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                i_emailid: '',
                i_userid: ''
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.result);
                this.setState({
                    outData: responseJson.result
                });

                console.log(this.state.outData);
                return responseJson.result;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {

        this.getusers();
    }

    editusers(selectedrow) {
        ReactDOM.render((<VWRegisterContent register={selectedrow} />), document.getElementById("main-content"));

    }



    render() {

        return <UserListContent userdata={this} />

    }
}

export default UserList;