import React from 'react';
 
const ApplicationContent = ({objapplication}) => (
	
	<div>
		<div className="text-center" style={{padding:'10px 0'}}>
		
			
			<div className="login-form-1">
			<form  onSubmit={objapplication.btnsubmit}>
					<div className="login-form-main-message">{objapplication.state.ErrorMsg}</div>
					<div className="main-login-form">
						<div className="login-group">
						<input type="hidden" className="form-control" id="hdncustid" name="hdncustid"/>
						<div className="form-group">
							<select name="prefix" id="prefix" className="form-control" required >
								<option key='1' value='1'>Mr.</option>
								<option key='2' value='2'>Mrs.</option>
								<option key='3' value='3'>Miss</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">First Name</label>
								<input type="text" className="form-control" id="fname" name="fname" placeholder="First Name"  required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Middle Name</label>
								<input type="text" className="form-control" id="mname" name="mname" placeholder="Middle Name" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Last Name</label>
								<input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">DOB</label>
								<input type="text" className="form-control" id="dob" name="dob" placeholder="DOB" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Gender</label>
								<input type="text" className="form-control" id="gender" name="gender" placeholder="Gender" required maxLength="15"/>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">FathersName</label>
								<input type="text" className="form-control" id="fathername" name="fathername" placeholder="FathersName" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">MothersMaidenName</label>
								<input type="text" className="form-control" id="mothermaidenname" name="mothermaidenname" placeholder="MothersMaidenName" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Qualification</label>
								<input type="text" className="form-control" id="qualification" name="qualification" placeholder="Qualification" required maxLength="15"/>
							</div>

                              
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">EmailAddress</label>
								<input type="email" className="form-control" id="email" name="email" placeholder="EmailAddress" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Mobile</label>
								<input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResidenceAddress1</label>
								<input type="text" className="form-control" id="resadd1" name="resadd1" placeholder="ResidenceAddress1" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResidenceAddress2</label>
								<input type="text" className="form-control" id="resadd2" name="resadd2" placeholder="ResidenceAddress2" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResidenceAddress3</label>
								<input type="text" className="form-control" id="resadd3" name="resadd3" placeholder="ResidenceAddress3" required maxLength="15"/>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">ResiLandmark</label>
								<input type="text" className="form-control" id="resilandmark" name="resilandmark" placeholder="ResiLandmark" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiCity</label>
								<input type="text" className="form-control" id="rescity" name="rescity" placeholder="ResiCity" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiPin</label>
								<input type="text" className="form-control" id="respin" name="respin" placeholder="ResiPin" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiPhone</label>
								<input type="text" className="form-control" id="resphone" name="resphone" placeholder="ResiPhone" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiState</label>
								<input type="text" className="form-control" id="resstate" name="resstate" placeholder="ResiState" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">ResiStdCode</label>
								<input type="text" className="form-control" id="resstdcode" name="resstdcode" placeholder="ResiStdCode" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OccupationType</label>
								<input type="text" className="form-control" id="occupationtype" name="occupationtype" placeholder="OccupationType" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">Designation</label>
								<input type="text" className="form-control" id="designation" name="designation" placeholder="Designation" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">CompanyName</label>
								<input type="text" className="form-control" id="companyname" name="companyname" placeholder="CompanyName" required maxLength="15"/>
							</div>

                            <div className="form-group">
								<label htmlFor="name" className="sr-only">NatureOfBusiness</label>
								<input type="text" className="form-control" id="natureofbusiness" name="natureofbusiness" placeholder="NatureOfBusiness" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeAddress1</label>
								<input type="text" className="form-control" id="offadd1" name="offadd1" placeholder="OfficeAddress1" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeAddress2</label>
								<input type="text" className="form-control" id="offadd2" name="offadd2" placeholder="OfficeAddress2" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeAddress3</label>
								<input type="text" className="form-control" id="offadd3" name="offadd3" placeholder="OfficeAddress3" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficePhone</label>
								<input type="text" className="form-control" id="officephone" name="officephone" placeholder="OfficePhone" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeStdCode</label>
								<input type="text" className="form-control" id="officestdcode" name="officestdcode" placeholder="OfficeStdCode" required maxLength="15"/>
							</div>

                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficePin</label>
								<input type="text" className="form-control" id="officepin" name="officepin" placeholder="OfficePin" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeState</label>
								<input type="text" className="form-control" id="officestate" name="officestate" placeholder="OfficeState" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeCity</label>
								<input type="text" className="form-control" id="officecity" name="officecity" placeholder="OfficeCity" required maxLength="15"/>
							</div>
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">YearsOfCurrentEmployment</label>
								<input type="text" className="form-control" id="currempyear" name="currempyear" placeholder="YearsOfCurrentEmployment" required maxLength="15"/>
							</div>
                           
                        
                            <div className="form-group">
								<label htmlFor="name" className="sr-only">OfficeLandmark</label>
								<input type="text" className="form-control" id="officelandmark" name="officelandmark" placeholder="OfficeLandmark" required maxLength="15"/>
							</div>
							<div className="form-group">
								<label htmlFor="name" className="sr-only">PAN</label>
								<input type="text" className="form-control" id="pan" name="pan" placeholder="PAN" required maxLength="15"/>
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