import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
  const [email, setEmail] = useState(''); // Change username to email
  const [password, setPassword] = useState('');
  const [visible , setVisible] =useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://zadkinder.onrender.com/admin/login',
        { email, password } // Use email instead of password
      );

      const { token } = response.data;

      localStorage.setItem('token', token);
      navigate('/adminDashboard');
    } catch (error) {
      console.error(error);
      window.alert("يرجى التأكد من البريد الإلكتروني وكلمة المرور");
    }
  };

  return (
    <>
      <div className="container loginadmin">
        <div className="w-75 m-auto login-admin p-5 mt-5">
          <h2>تسجيل الدخول</h2>
          <form action="" onSubmit={handleLogin}>
            <div>
              <label htmlFor="">البريد الإلكتروني</label>
              <input className='form-control'
                type="text"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">كلمة المرور</label>
              <div className='pass-box'>
              <input className='form-control'
                type={visible? "text" :"password"}
                placeholder="كلمة المرور"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span onClick={()=> setVisible(!visible)} className="seenpass">
      {visible?<i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash "></i> }
      </span>
      </div>
            </div>
            <button className="btn" type="submit">
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function LoginAdmin() {
  
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   let navigate= useNavigate(); //hoke

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         'https://zadkinder.onrender.com/admin/login',
//         { password }
//       );

//       const { token } = response.data;

//       // store the token in local storage
//       localStorage.setItem('token', token);
//       navigate('/adminDashboard');

//       // window.alert("تم تسجيل الدخول بنجاح ,قم بإعادة تحميل الصفحة ")
//     } catch (error) {
//       console.error(error);
//       window.alert("يرجى التأكد من اسم المستخدم وكلمة المرور")
//     }
 
//   }
//       return (
//         <>
//         <div className="container loginadmin">
//           <div className="w-75 m-auto login-admin p-5 mt-5">
//             <h2>تسجيل الدخول</h2>
//             <form action="" onSubmit={handleLogin}>
//               <div>
//               <label htmlFor="">اسم المستخدم</label>
//               <input type="text" placeholder=' اسم المستخدم' value={username} onChange={(event) => setUsername(event.target.value)}/>
//               </div>
//               <div>
//               <label htmlFor="">كلمة المرور</label>
//               <input type="password" placeholder='كلمة المرور' value={password} onChange={(event) => setPassword(event.target.value)}/>
//               </div>
//               <button className="btn" type='submit'>تسجيل الدخول</button>
//             </form>
    
//           </div>
//         </div>
//         </>
//       )
// }


