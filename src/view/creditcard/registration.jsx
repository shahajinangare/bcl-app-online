import React from 'react';
 
const RegistrationContent = ({objregister}) => (
	
	<div>
		<div className="text-center" style={{padding:'10px 0'}}>
		
			
			<div className="login-form-1">
			<form  onSubmit={objregister.btnsubmit}>
					<div className="login-form-main-message">{objregister.state.ErrorMsg}</div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="name" className="sr-only">Customer Name</label>
								<input type="text" className="form-control" id="name" name="name" placeholder="Customer Name" required  maxLength="30"/>
							</div>
							<div className="form-group">
								<label htmlFor="mobileno" className="sr-only">Mobile no</label>
								<input type="number" className="form-control" id="mobileno" name="mobileno" placeholder="Mobile no" pattern="\d*" required maxLength="10"
								onInput={(e)=>{ e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)}} />
							</div>
							<div className="form-group">
								<label htmlFor="emailid" className="sr-only">Email Id</label>
								<input type="email" className="form-control" id="emailid" name="emailid" autoComplete="off" placeholder="Email Id" required   maxLength="30" />
							</div>
							<div className="form-group">
								<label htmlFor="pincode" className="sr-only">Pincode</label>
								<input type="number" className="form-control" id="pincode" name="pincode" placeholder="Pincode"  required  pattern="\d*" maxLength="6" 
								onInput={(e)=>{ e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)}} />
							</div>

							<div className="form-group">
								<label htmlFor="income" className="sr-only">Income</label>
								<input type="number" className="form-control" id="income" name="income" placeholder="Income" pattern="\d*"  maxLength="6" 
								onInput={(e)=>{ e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)}}/>
							</div>
						</div>
						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
					</div>
					</form>
					
				
			</div>
		</div>

	
</div>
);

export default RegistrationContent;