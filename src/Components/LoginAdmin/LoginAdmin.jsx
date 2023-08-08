import React, { useState } from 'react';
import axios from 'axios';

export default function LoginAdmin() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://zadkinder.onrender.com/admin/login',
        // 'https://zadkinder-production.up.railway.app/admin/login',
        { password }
      );

      const { token } = response.data;

      // store the token in local storage
      localStorage.setItem('token', token);

      window.alert("تم تسجيل الدخول بنجاح ,قم بإعادة تحميل الصفحة ")
    } catch (error) {
      console.error(error);
      window.alert("يرجى التأكد من اسم المستخدم وكلمة المرور")
    }
 
  }
      return (
        <>
        <div className="container loginadmin">
          <div className="w-75 m-auto login-admin p-5 mt-5">
            <h2>تسجيل الدخول</h2>
            <form action="" onSubmit={handleLogin}>
              <div>
              <label htmlFor="">اسم المستخدم</label>
              <input type="text" placeholder=' اسم المستخدم' value={username} onChange={(event) => setUsername(event.target.value)}/>
              </div>
              <div>
              <label htmlFor="">كلمة المرور</label>
              <input type="password" placeholder='كلمة المرور' value={password} onChange={(event) => setPassword(event.target.value)}/>
              </div>
              <button className="btn" type='submit'>تسجيل الدخول</button>
            </form>
    
          </div>
        </div>
        </>
      )
}
