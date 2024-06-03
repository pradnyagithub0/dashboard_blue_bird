import React from 'react'
import { Link } from 'react-router-dom';
import favicon from '../assets/images/favicon1.png';


const Forgetpass = () => {
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
                            <div className='d-flex justify-content-center align-items-center mb-4' >
                                <Link to="/signup" className='text-danger me-2 linkStyle'>Home</Link>
                                <span className='text-danger me-2'>|</span>
                                <Link to="/" className='text-danger me-2 linkStyle'>Login</Link>
                            </div>
                            <h4 className='heading mb-4'>Forget Password</h4>
                            <div className='mb-4 inputDivs'>
                                <input type='text' className='customFormControl2 mb-4' placeholder='Please enter user id'/>
                          </div>
                          <div className='mb-4'>
                            <Link to="/forgetpass" className='forgetPass linkStyle'>Forget password?</Link>
                          </div>
                          <div>
                              <button className='btnPrimary'>Reset <i class="bi bi-caret-right-fill ps-2"></i></button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Forgetpass