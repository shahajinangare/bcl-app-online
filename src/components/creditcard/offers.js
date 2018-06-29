import React, { Component } from 'react';
import OfferListContent from '../../view/creditcard/offers';
import { deviceDetect } from 'react-device-detect';


class OfferList extends Component {

    outData = [];
    constructor(props) {
        super(props);

        this.state = {
            outData: [],
            emailid: ''
        };
      
        this.getoffers = this.getoffers.bind(this);
    }


 
    
 
    getoffers() {

        fetch('http://localhost:7000/creditcard/getoffers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
         
            body: JSON.stringify({
                customerid: '1',
                pincode: '110002',
                income:'25000'
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

    createapplication(application) {

        console.log(application.original);
      
        const deviceinfo= deviceDetect();

        fetch('http://localhost:7000/creditcard/createapplication', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerid: application.original.customerid,
                bankid: application.original.bankid,
                statusid:1,
                offerid: application.original.offerid,
                income: application.original.income,
                pincode: application.original.pincode,
                latlong:'333',
                macaddress:'sdld',
                browser:deviceinfo.browserName,
                os:deviceinfo.osName,
                source: deviceinfo.engineName,
                createdby:'',
                createdip:'123.88.88.8'

            }),
        }).then((response) => response.json())
            .then((responseJson) => {
               
                if (responseJson.code === 200)
                 {   
                     alert('Application Number :' + responseJson.outid + ' is created.');
                    const { state = {} } = this.props.location;
                    const { prevLocation } = state;
              
              
                    this.setState(
                      {
                        loggedIn: true,
                      },
                      () => {
                        this.props.history.push(prevLocation || "/register");
                      },
                    );
                }
              
               
            })
            .catch((error) => {
                console.error(error);
            });

      
    }
    componentDidMount() {

        this.getoffers();
    }



    render() {

        return <OfferListContent offerinput={this} />

    }
}

export default OfferList;