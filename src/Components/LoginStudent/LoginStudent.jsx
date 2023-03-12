import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingPage from '../LoadingPage';

export default function LoginStudent() {
  const [loading, setLoading] = useState(true); // set initial value to true
  const timeoutId= useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  function submitLoginStudent(e){
    e.preventDefault();
    window.alert("لقد حدث خطأ ما...")
  }
  return (
    <>
    {loading ? (
        <LoadingPage />
      ) : (
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
          <input type="password" placeholder='كلمة المرور' />
          </div>
          <button className="btn" type='submit'>تسجيل الدخول</button>
        </form>

      </div>
    </div>
    )}
    </>
  )
}
