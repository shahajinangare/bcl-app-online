import React from 'react';

const RegisterContent = ({register}) => (
	<div>
		{/* <div class="text-center" style={{padding:'50px 0'}}>
		hi shahaji
		</div> */}
		{ register.type==="reg" ?  
		<div id="divadduser" className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">Register</div>
			<div className="login-form-1">
				<form id="register-form" className="text-left" onSubmit={register.registersubmit}>
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="reg_username" className="sr-only">Name</label>
								<input type="text" className="form-control" id="regusername" name="regusername" autoComplete="off" placeholder="username" required/>
							</div>
							<div className="form-group">
								<label htmlFor="reg_password" className="sr-only">Emailid</label>
								<input type="email" className="form-control" id="regemailid" name="regemailid" autoComplete="off" placeholder="emailid" required/>
							</div>
							<div className="form-group">
								<label htmlFor="reg_password_confirm" className="sr-only">Mobileno</label>
								<input type="tel" pattern="[0-9]{10}" className="form-control" maxLength="10" id="regmobileno" name="regmobileno" autoComplete="off" placeholder="mobileno" required/>
							</div>
							
							<div className="form-group">
								<label htmlFor="reg_email" className="sr-only">Bussinesscode</label>
								<input type="text" className="form-control" id="regbussinescode" name="regbussinescode" autoComplete="off" placeholder="bussinesscode" required/>
							</div>
							<div className="form-group">
							<select name="roleid" id="roleid" className="form-control" required>
                              {register.state.roles.map((role) => <option key={role.roleid} value={role.roleid}>{role.rolename}</option>)}
                            </select>
							</div>
							{/* <div className="form-group login-group-checkbox">
								<input type="radio" className="" name="reg_gender" id="male" placeholder="username"/>
								<label for="male">male</label>
								
								<input type="radio" className="" name="reg_gender" id="female" placeholder="username"/>
								<label for="female">female</label>
							</div> */}
							
							{/* <div className="form-group login-group-checkbox">
								<input type="checkbox" className="" id="reg_agree" name="reg_agree"/>
								<label for="reg_agree">i agree with <a href="#">terms</a></label>
							</div> */}
						</div>
						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
					</div>
					<div className="etc-login-form">
						<p>already have an account? <a href="" onClick={register.loginview}>login here</a></p>
					</div>
				</form>
			</div>

		</div>
		: 

		<div id="divupdateuser" className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">Register</div>
			<div className="login-form-1">
				<form id="register-form" className="text-left" onSubmit={register.Updatesubmit}>
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="reg_username" className="sr-only">Name</label>
								<input type="hidden" id="upduserid" name="upduserid" value={register.state.upd_userid}></input>
								<input type="text" className="form-control" id="uptusername" name="uptusername" autoComplete="off" placeholder="username" defaultValue={register.state.upd_username} required  />
							</div>
							<div className="form-group">
								<label htmlFor="reg_password" className="sr-only">Emailid</label>
								<input type="email" className="form-control" id="uptemailid" name="uptemailid" autoComplete="off" placeholder="emailid" required defaultValue={register.state.upd_useremailid}/>
							</div>
							<div className="form-group">
								<label htmlFor="reg_password_confirm" className="sr-only">Mobileno</label>
								<input type="tel" pattern="[0-9]{10}" className="form-control" maxLength="10" id="uptmobileno" name="uptmobileno" autoComplete="off" placeholder="mobileno" required defaultValue={register.state.upd_usermobileno}/>
							</div>
							
							<div className="form-group">
								<label htmlFor="reg_email" className="sr-only">Bussinesscode</label>
								<input type="text" className="form-control" id="uptbussinescode" name="uptbussinescode" autoComplete="off" placeholder="bussinesscodes" required defaultValue={register.state.upd_userbussinesscode}/>
							</div>
							<div className="form-group">
							<select name="updroleid" id="updroleid" className="form-control" required value={register.state.upd_userroleid} onChange={register.handleSelectChange} >
                              {register.state.roles.map((role) => <option key={role.roleid} value={role.roleid}>{role.rolename}</option>)}
                            </select>
							</div>
							{/* <div className="form-group login-group-checkbox">
								<input type="radio" className="" name="reg_gender" id="male" placeholder="username"/>
								<label for="male">male</label>
								
								<input type="radio" className="" name="reg_gender" id="female" placeholder="username"/>
								<label for="female">female</label>
							</div> */}
							
							{/* <div className="form-group login-group-checkbox">
								<input type="checkbox" className="" id="reg_agree" name="reg_agree"/>
								<label for="reg_agree">i agree with <a href="#">terms</a></label>
							</div> */}
						</div>
						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
					</div>
					<div className="etc-login-form">
						<p>already have an account? <a href="" onClick={register.loginview}>login here</a></p>
					</div>
				</form>
			</div>

		</div>
	}
</div>
);

export default RegisterContent;