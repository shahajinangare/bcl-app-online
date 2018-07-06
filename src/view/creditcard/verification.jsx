import React from 'react';
import Loader from '../../components/common/loader'

const VerificationContent = ({Verify}) => (

	<div>
		{ 
             Verify.state.isLoaded==='block'?<Loader/>:""

		
		}
	
	<div className="text-center" style={{padding:'10px 0'}}>
		
			
			<div className="login-form-1">
			<form  onSubmit={Verify.btnsubmit}>
					<div className="login-form-main-message">{Verify.state.ErrorMsg}</div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="mobileno" className="sr-only">Mobile no</label>
							
								<input type="text" className="form-control" id="mobileno" name="mobileno" placeholder="Mobile no" required  value={Verify.state.showmobileno}  />
							</div>
							<div className="form-group">
								<label htmlFor="otp" className="sr-only">OTP</label>
								<input type="number" className="form-control" id="otp" name="otp" pattern="\d*" placeholder="OTP" required maxLength="6" 
								 onInput={(e)=>{ e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)}}  />
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