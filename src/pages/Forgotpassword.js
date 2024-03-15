import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {Link} from 'react-router-dom'

const Forgotpassword = () => {
  return (
    <>
        <Meta title={'Forgot Password'}/>
        <BreadCrumb title='Forgot Password'/>

        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <p className="text-center">Enter email address to reset your password</p>
                            <form action="" className='d-flex flex-column gap-15 '>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className="form-control mt-2" />
                                </div>
                                <div>
                                    
                                    <div className="d-flex align-items-center flex-column gap-15">
                                        <button className='button' type='submit'>Submit</button>
                                        <Link className='forgotpassword' to='/login'>Cancel</Link>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forgotpassword