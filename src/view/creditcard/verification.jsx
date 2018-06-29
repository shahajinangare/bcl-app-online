import React from 'react';
 
const VerificationContent = ({Verify}) => (
	
	<div>
		<div className="text-center" style={{padding:'10px 0'}}>
		
			
			<div className="login-form-1">
			<form  onSubmit={Verify.btnsubmit}>
					<div className="login-form-main-message">{Verify.state.ErrorMsg}</div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="mobileno" className="sr-only">Mobile no</label>
								<input type="number" className="form-control" id="mobileno" name="mobileno" placeholder="Mobile no"  />
							</div>
							<div className="form-group">
								<label htmlFor="otp" className="sr-only">OTP</label>
								<input type="number" className="form-control" id="otp" name="otp" placeholder="OTP" />
							</div>
						</div>
						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
					</div>
					</form>
				 
				
			</div>
		</div>

	
</div>
);

export default VerificationContent;