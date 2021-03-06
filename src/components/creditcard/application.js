import React, { Component } from 'react';
import ApplicationContent from '../../view/creditcard/application'
import { deviceDetect } from 'react-device-detect';
import moment from 'moment';
import ReactDOM from 'react-dom';
let temp ="";
let temp1 ="";
class Application extends Component {
 
  constructor(props) {
    super(props);
   
      this.state = {
      custData:[],
      qualificationall:[],
      Allcompany:[],
      selectedcompany:'',
      dataSource:[],
      prefixid:'',
      qualificationid:'',
      genderid:'',
      ErrorMsg:'',
      startDate:moment(),
      isLoaded: 'none',
      compname:'',
      
      };
    
      this.applicationsubmit = this.applicationsubmit.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handlePrefixChange = this.handlePrefixChange.bind(this);
      this.handleGenderChange = this.handleGenderChange.bind(this);
      this.handledateChange = this.handledateChange.bind(this);
      
      
    }
    componentDidMount() {
     
      this.getqualification();
      this.getcompany();
      this.getCustomerinfo();
      
    }
    handleSelectChange(event) {
      this.setState({qualificationid: event.target.value});
     }
     handlePrefixChange(event) {
      this.setState({prefixid: event.target.value});
    }
    handleGenderChange(event) {
      this.setState({genderid: event.target.value});
    }

    handledateChange(event) {
     
      this.setState({startDate: event});
    }
    onDatechange(event) {
     
     alert(event)
     
    }

    handleSearch = (value) => {
      
      var comp= this.state.Allcompany.filter(l => {
        return l.companyname.toLowerCase().startsWith(value);
      });

      this.setState({
        dataSource: comp
      });

       
    }
    onCompanySelect= (value) => {
      //alert('onCompanySelect');
      //alert(value);
      this.setState({
        selectedcompany: value
      });
    }
    onCompanyChange= (value) => {
      //alert('onCompanyChange');
      //alert(value);
      this.setState({
        selectedcompany: value
      });
      
    }

    getqualification(){
      fetch('http://localhost:7000/creditcard/getqualification', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
     
      }).then((response) => response.json())
          .then((responseJson) => {
           
              if(responseJson.code == 200)
              {
                let QualificationFromApi = responseJson.result.map(iteam => { return {qualificationid: iteam.qualificationid, qualification: iteam.qualification} })
                this.setState({ qualificationall: [{qualificationid: '', qualification: 'Select qualification'}].concat(QualificationFromApi) });
               }
              else
              {
                this.setState({
                  ErrorMsg: responseJson.message
                });
              }
            return responseJson.result;
          })
          .catch((error) => {
            console.error(error);
          });
     }
    
     getcompany(){
      fetch('http://localhost:7000/creditcard/getcompany', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
     
      }).then((response) => response.json())
          .then((responseJson) => {
           
              if(responseJson.code == 200)
              {
                let CompanyFromApi = responseJson.result.map(iteam => { return {companyid: iteam.companyid, companyname: iteam.companyname} })
                this.setState({ Allcompany: CompanyFromApi });
                
               }
              else
              {
                this.setState({
                  ErrorMsg: responseJson.message
                });
              }
            
          })
          .catch((error) => {
            console.error(error);
          });
     }

    getCustomerinfo()
    { 
      const custdet=JSON.parse(sessionStorage.getItem('cccustdet'));
        fetch('http://localhost:7000/creditcard/getcustomerinfo',{
          method:'POST',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            //customerid:custdet.customerid,
            customerid:'1',
            mobileno:""
          }),

        }).then((response)=>response.json())
        .then((responseJson) => {
          var momnetdate = moment(); 
          var dob = responseJson.result[0].DOB;
          var newdob = moment(dob);
          momnetdate.set(newdob.toObject())
        
          this.setState({
            custData : responseJson.result,
            prefixid:responseJson.result[0].prefix,
            qualificationid:responseJson.result[0].qualificationid,
            genderid:responseJson.result[0].gender,
            compname:"ss", //responseJson.result[0].companyname,
            startDate :momnetdate
        });

        console.log(this.state.compname)
        console.log(this.state.startDate)
        console.log(this.state.custData[0].DOB)
        
      })
      .catch((error) => {
          console.error(error);
      });
    }

    applicationsubmit(event){
      this.setState({
        isLoaded: 'block'
      });  
    alert(this.state.selectedcompany) 
   const deviceinfo= deviceDetect();
   event.preventDefault();
   fetch('http://localhost:7000/creditcard/createcustomerprofile', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body:JSON.stringify({
          name:event.target.fname.value,
          emailid:event.target.email.value,
          mobileno:event.target.mobile.value,
          pancard:event.target.pan.value,
          DOB:event.target.dob.value,
          prefix:event.target.prefix.value,
          gender:event.target.gender.value,
          customerid:event.target.hdncustid.value,
          companyname:this.state.selectedcompany,
          compnayid:event.target.hdncompnayid.value,
          qualificationid :event.target.qualificationid.value,
          residenceaddress1:event.target.resadd1.value,
          residenceaddress2:event.target.resadd2.value,
          residenceaddress3:event.target.resadd3.value,
          resicity:event.target.rescity.value,
          resipin :event.target.respin.value,
          resiphone  :event.target.resphone.value,
          resistate:event.target.resstate.value,
          resistdcode:event.target.resstdcode.value,
          occupationtype:event.target.occupationtype.value,
          designation:event.target.designation.value,
          natureofbusiness:event.target.natureofbusiness.value,
          officeaddress1:event.target.offadd1.value,
          officeaddress2:event.target.offadd2.value,
          officeaddress3:event.target.offadd3.value,
          officephone  :event.target.officephone.value,
          officestdcode  :event.target.officestdcode.value,
          officepin  :event.target.officepin.value,
          officestate:event.target.officestate.value,
          officecity:event.target.officecity.value,
          yearsofcurrentemployment:event.target.currempyear.value,
          fathersname:event.target.fathername.value,
          mothersmaidenname:event.target.mothermaidenname.value,
          resilandmark:event.target.resilandmark.value,
          officelandmark:event.target.officelandmark.value,
          createdby:event.target.hdncustid.value,
          createdip:'123.22.2.2',
          latlong:'s',
          macaddress:'s',
          browser:deviceinfo.browserName,
          os:deviceinfo.osName,
          source:deviceinfo.engineName
     }),
   }).then((response) => response.json())
       .then((responseJson) => {
         console.log(responseJson);
        
           if(responseJson.code === 200)
           {

        const { state = {} } = this.props.location;
        const { prevLocation } = state;
        

            this.setState(
                      {
                        loggedIn: true,
                      },
                      () => {
                        this.props.history.push(prevLocation || "/thankyou");
                      },
                    );
            
           }
           else
           {
             this.setState({
               ErrorMsg: responseJson.message
             });
           }
         return responseJson.result;
       })
       .catch((error) => {
         console.error(error);
       });
    };
    
    
    render() {
   
      return (
     
          <ApplicationContent objapplication={this} test={this.state.compname}/>
      
      )
    }
  }

  export default Application;