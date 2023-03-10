import React from 'react'

export default function LoginAdmin() {
      return (
        <>
        <div className="container loginadmin">
          <div className="w-75 m-auto login-admin p-5 mt-5">
            <h2>تسجيل الدخول</h2>
            <form action="">
              <div>
              <label htmlFor="">اسم المستخدم</label>
              <input type="text" placeholder=' اسم المستخدم' value="lolo"/>
              </div>
              <div>
              <label htmlFor="">كلمة المرور</label>
              <input type="text" placeholder='كلمة المرور' />
              </div>
              <button className="btn" type='submit'>تسجيل الدخول</button>
            </form>
    
          </div>
        </div>
        </>
      )
}
