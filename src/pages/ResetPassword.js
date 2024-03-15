import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const ResetPassword = () => {
  return (
    <>
        <Meta title={'Reset Password'}/>   
        <BreadCrumb title='Reset Password'/>
        <div className="login-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <p className="text-center">Enter your new password</p>
                        <form action="" className='d-flex flex-column gap-15 '>
                            <div>
                                <input type="password" name='password' placeholder='Password' className="form-control mt-2" />
                            </div>
                            <div>
                                <input type="password" name='confirm-password' placeholder='Confirm Password' className="form-control mt-2" />
                            </div>
                            <div>
                                <div className="d-flex justify-content-center align-items-center gap-15">
                                    <button className='button'>Comfirm</button>
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

export default ResetPassword