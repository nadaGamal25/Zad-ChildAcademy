import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage';
import Joi from 'joi';

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
  let navigate= useNavigate(); //hoke
  const [errorList, seterrorList]= useState([]); 
  const [theUser,setUser] =useState({
    cid:'',
    password:''
  })
  const [visible , setVisible] =useState(false);
  const [error , setError]= useState('')
  const [isLoading, setisLoading] =useState(false)

  async function sendLoginDataToApi(){
  try {
        const response = await axios.post('https://zadkinder.onrender.com/students/login', theUser);
        if (response.status === 200) {
          console.log(response)
          setisLoading(false)
          localStorage.setItem('userToken', response.data.token);
          navigate('/studentProfile');
        } else {
          setisLoading(false)
          // setError(data.msg)
          // console.log(data.msg)
        }
      } catch (error) {
        console.log(error);
        window.alert('كلمة المرور او رقم الهوية قد يكون خطأ');
      }
    }

  

        function submitLoginForm(e) {
          e.preventDefault();
          setisLoading(true);
          let validation = validateLoginForm();
          console.log(validation);
          if (validation.error) {
            setisLoading(false);
            seterrorList(validation.error.details);
          } else {
            
              sendLoginDataToApi();
            
          }
        }

  function getUserData(e){
    let myUser={...theUser};
    myUser[e.target.name]= e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  function validateLoginForm(){
    let scheme= Joi.object({
      cid:Joi.string().required(),
      password:Joi.string().required()

    });
    return scheme.validate(theUser, {abortEarly:false});
  }

  return (
    <>
    {loading ? (
        <LoadingPage />
      ) : (
    <div className="container loginstudent">
      <div className="w-75 m-auto login-studet p-5 mt-5">
        <h2>تسجيل الدخول</h2>
        <form action="" onSubmit={submitLoginForm}>
          <div>
          <label htmlFor="">رقم الهوية/الإقامة للطفل</label>
          <input className='form-control' onChange={getUserData} name='cid' type="text" placeholder='رقم هوية الطفل'/>
          {errorList.map((err,index)=>{
      if(err.context.label ==='password'){
        return <div key={index} className="alert alert-danger my-2">رقم الهوية غير صحيح</div>
      }
      
    })}
          </div>
          <div>
          <label htmlFor="">كلمة المرور</label>
          <div className='pass-box'>
          <input className='form-control'
            type={visible? "text" :"password"}
           name='password' placeholder='كلمة المرور'  onChange={getUserData}/>
           <span onClick={()=> setVisible(!visible)} className="seenpass">
      {visible?<i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash "></i> }
      </span>
      </div>
          {errorList.map((err,index)=>{
      if(err.context.label ==='password'){
        return <div key={index} className="alert alert-danger my-2">كلمة المرور غير صحيحة</div>
      }
      
    })}
          </div>
          <button className="btn" type='submit'>تسجيل الدخول</button>
        </form>

      </div>
    </div>
    )}
    </>
  )
}
