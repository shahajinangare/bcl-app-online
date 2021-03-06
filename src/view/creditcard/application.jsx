import React from 'react';
//import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Loader from '../../components/common/loader'
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';
import {DatePicker} from 'antd';




const ApplicationContent = ({objapplication, test}) => (
	
	<div>
		{ 
			 objapplication.state.isLoaded==='block'?<Loader/>:""
        }
		
		<div className="text-center" style={{padding:'10px 0'}}>
		
			
			<div className="login-form-1">
			<form id="frm"  onSubmit={objapplication.applicationsubmit}>
					<div className="login-form-main-message">{objapplication.state.ErrorMsg}</div>
					<div className="main-login-form">
						<div className="login-group">
						<input type="hidden" className="form-control" id="hdncustid" name="hdncustid" value={objapplication.state.custData.map(item =>item.customerid)}/>

						<input type="hidden" className="form-control" id="hdncompnayid" name="hdncompnayid" value={objapplication.state.custData.map(item =>item.companyid)}/>
						
						<div className="form-group">
						
							<select name="prefix" id="prefix" className="form-control" value={objapplication.state.prefixid} onChange={objapplication.handlePrefixChange}  required >
								<option key='Mr.' value='Mr.'>Mr.</option>
								<option key='Mrs.' value='Mrs.'>Mrs.</option>
								<option key='Miss.' value='Miss.'>Miss</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">First Name</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="fname" name="fname" placeholder="First Name" defaultValue={objapplication.state.custData.map(item =>item.name)}  required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Middle Name</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="mname" name="mname" placeholder="Middle Name"  required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Last Name</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="lname" name="lname" placeholder="Last Name" required maxLength="15" autoComplete="off"/>
							</div>
                           
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">DOB</label>
								<DatePicker id="dob" name="dob"
                                selected={objapplication.state.startDate}
                                onChange={objapplication.handledateChange}
                                peekNextMonth
                                showMonthDropdown
                                 showYearDropdown
                                dropdownMode="select"
                                dateFormat="DD/MM/YYYY"
								placeholderText="MM/DD/YYYY"
								
                                readOnly/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Gender</label>
								<select name="gender" id="gender" className="form-control" value={objapplication.state.genderid} onChange={objapplication.handleGenderChange} required >
								<option key='M' value='M'>M</option>
								<option key='F' value='F'>F</option>
								<option key='T' value='T'>T</option>
								</select>
								
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">FathersName</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="fathername" name="fathername" placeholder="Father Name" defaultValue={objapplication.state.custData.map(item =>item.fathersname)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">MothersMaidenName</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="mothermaidenname" name="mothermaidenname" placeholder="MothersMaidenName" defaultValue={objapplication.state.custData.map(item =>item.mothersmaidenname)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Qualification</label>
								<select name="qualificationid" id="qualificationid" className="form-control" value={objapplication.state.qualificationid} onChange={objapplication.handleSelectChange} required  >
                              {objapplication.state.qualificationall.map((item) => <option key={item.qualificationid} value={item.qualificationid}>{item.qualification}</option>)}
                            </select>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">EmailAddress</label>
								<input type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="form-control" id="email" name="email" placeholder="EmailAddress" defaultValue={objapplication.state.custData.map(item =>item.emailid)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Mobile</label>
								<input type="tel" pattern="^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$" className="form-control" id="mobile" name="mobile" placeholder="Mobile" defaultValue={objapplication.state.custData.map(item =>item.mobileno)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResidenceAddress1</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="resadd1" name="resadd1" placeholder="ResidenceAddress1" defaultValue={objapplication.state.custData.map(item =>item.residenceaddress1)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResidenceAddress2</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="resadd2" name="resadd2" placeholder="ResidenceAddress2" defaultValue={objapplication.state.custData.map(item =>item.residenceaddress2)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResidenceAddress3</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="resadd3" name="resadd3" placeholder="ResidenceAddress3" defaultValue={objapplication.state.custData.map(item =>item.residenceaddress3)} required maxLength="15" autoComplete="off"/>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">ResiLandmark</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="resilandmark" name="resilandmark" placeholder="ResiLandmark" defaultValue={objapplication.state.custData.map(item =>item.resilandmark)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiCity</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="rescity" name="rescity" placeholder="ResiCity" defaultValue={objapplication.state.custData.map(item =>item.resicity)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiPin</label>
								<input type="text" pattern="[1-9][0-9]{5}" className="form-control" id="respin" name="respin" placeholder="ResiPin" defaultValue={objapplication.state.custData.map(item =>item.resipin)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiPhone</label>
								<input type="text" className="form-control" id="resphone" name="resphone" placeholder="ResiPhone" defaultValue={objapplication.state.custData.map(item =>item.resiphone)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiState</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="resstate" name="resstate" placeholder="ResiState" defaultValue={objapplication.state.custData.map(item =>item.resistate)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiStdCode</label>
								<input type="text" pattern="[0-9]{3,4}"  className="form-control" id="resstdcode" name="resstdcode" placeholder="ResiStdCode" defaultValue={objapplication.state.custData.map(item =>item.resistdcode)} required maxLength="4" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OccupationType</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="occupationtype" name="occupationtype" placeholder="OccupationType" defaultValue={objapplication.state.custData.map(item =>item.occupationtype)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Designation</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="designation" name="designation" placeholder="Designation" defaultValue={objapplication.state.custData.map(item =>item.designation)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">CompanyName</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="designation" 
								name="designation" placeholder="Designation" 
								defaultValue={test} required maxLength="15" autoComplete="off"/>
								<AutoComplete
								dataSource={objapplication.state.dataSource.map(item =>item.companyname)}
								style={{ width: 250 }}
								onSearch={objapplication.handleSearch}
								onSelect={objapplication.onCompanySelect}
								onChange={objapplication.onCompanyChange}
								placeholder="Select company"
								value= {"sdf"}
								
							/>

						 
							</div>

                            <div className="form-group">
								<label htmlFor="name" className="sr-only">NatureOfBusiness</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="natureofbusiness" name="natureofbusiness" placeholder="NatureOfBusiness" defaultValue={objapplication.state.custData.map(item =>item.natureofbusiness)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeAddress1</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="offadd1" name="offadd1" placeholder="OfficeAddress1" defaultValue={objapplication.state.custData.map(item =>item.officeaddress1)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeAddress2</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="offadd2" name="offadd2" placeholder="OfficeAddress2" defaultValue={objapplication.state.custData.map(item =>item.officeaddress2)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeAddress3</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="offadd3" name="offadd3" placeholder="OfficeAddress3" defaultValue={objapplication.state.custData.map(item =>item.officeaddress3)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficePhone</label>
								<input type="text" className="form-control" id="officephone" name="officephone" placeholder="OfficePhone" defaultValue={objapplication.state.custData.map(item =>item.officephone)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeStdCode</label>
								<input type="text" pattern="[0-9]{3,4}" className="form-control" id="officestdcode" name="officestdcode" placeholder="OfficeStdCode" defaultValue={objapplication.state.custData.map(item =>item.officestdcode)} required maxLength="4" autoComplete="off"/>
							</div>

                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficePin</label>
								<input type="text" pattern="[1-9][0-9]{5}" className="form-control" id="officepin" name="officepin" placeholder="OfficePin" defaultValue={objapplication.state.custData.map(item =>item.officepin)} required maxLength="6" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeState</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="officestate" name="officestate" placeholder="OfficeState" defaultValue={objapplication.state.custData.map(item =>item.officestate)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeCity</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="officecity" name="officecity" placeholder="OfficeCity" defaultValue={objapplication.state.custData.map(item =>item.officecity)} required maxLength="15" autoComplete="off"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">YearsOfCurrentEmployment</label>
								<input type="text" className="form-control" id="currempyear" name="currempyear" placeholder="YearsOfCurrentEmployment" defaultValue={objapplication.state.custData.map(item =>item.yearsofcurrentemployment)} required maxLength="2" autoComplete="off"/>
							</div>
                           
                        
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeLandmark</label>
								<input type="text" pattern="^[a-zA-Z ]*$" className="form-control" id="officelandmark" name="officelandmark" placeholder="OfficeLandmark" defaultValue={objapplication.state.custData.map(item =>item.officelandmark)} required maxLength="10" autoComplete="off"/>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">PAN</label>
								<input type="text" className="form-control" id="pan" name="pan" placeholder="PAN" defaultValue={objapplication.state.custData.map(item =>item.pancard)} required maxLength="10" autoComplete="off"/>
							</div>
								<div className="form-group">{
									objapplication.state.custData.map(item =>item.DOB)
									}
							<DatePicker onChange={objapplication.onDatechange}
										
										placeholder="DD/MM/YYYY"
										dateFormat="YYYY-MM-DD"
										
										/>
                         
							</div>
							
						</div>
						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
					</div>
					</form>
					
				
			</div>
		</div>

	
</div>
);

export default ApplicationContent;