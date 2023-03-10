import React from 'react'

export default function LoginStudent() {
  function submitLoginStudent(e){
    e.preventDefault();
    window.alert("لقد حدث خطأ ما...")
  }
  return (
    <>
    <div className="container loginstudent">
      <div className="w-75 m-auto login-studet p-5 mt-5">
        <h2>تسجيل الدخول</h2>
        <form action="" onSubmit={submitLoginStudent}>
          <div>
          <label htmlFor="">رقم الهوية/الإقامة للطفل</label>
          <input type="text" placeholder='رقم هوية الطفل'/>
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
