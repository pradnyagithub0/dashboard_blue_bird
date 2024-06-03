import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/images/favicon1.png';
import logo from '../assets/images/logo.png';

const Signup = () => {
  return (
    <div className='signinContainer'>
      <div className='row formDiv'>
          <div className='col-lg-6 col-sm-12'>
              <div className="imgDiv">
                  <img src={favicon} alt='favicon' width="60%"  class="favIconImg" />
              </div>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <div className='formContainer'>
                  <div className='text-center'>
                      <img src={logo} alt='favicon' width="60%"  className="circular-image" />
                      <div className='d-flex justify-content-center align-items-center mb-4' >
                          <Link to="/signup" className='text-danger me-2 linkStyle'>Home</Link>
                          <span className='text-danger me-2'>|</span>
                          <Link to="/" className='text-danger me-2 linkStyle'>Login</Link>
                      </div>
                      <h4 className='heading mb-4'>Register</h4>
                      <div className='mb-4 inputDivs'>
                          <input type='text' className='customFormControl2 mb-4' placeholder='Enter Sponser Id'/>
                          <input type='text' className='customFormControl2 mb-4' placeholder='Sponser Name'/>
                          <input type='text' className='customFormControl2 mb-4' placeholder='User Name'/>
                          <input type='text' className='customFormControl2 mb-4' placeholder='Sponser Name'/>
                          <input type='text' className='customFormControl2 mb-4' placeholder='Password'/>
                          <input type='text' className='customFormControl2' placeholder='Re-Type Password'/>
                    </div>
                    <div className='mb-4'>
                      <Link to="/" className='text-light linkStyle'>Already have an account | Login</Link>
                    </div>
                    <div>
                        <button className='btnPrimary'>Register <i class="bi bi-caret-right-fill ps-2"></i></button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Signup