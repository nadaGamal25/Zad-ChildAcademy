import axios from 'axios';
import React, { useState } from 'react'
import Joi from 'joi'

export default function RegisterForm() {
    const [errorList, seterrorList]= useState([]); 
    const [student,setStudent] =useState({
        name:'',
        gender: '',
        nationality: '',
        cid: '',
        kinder: '',
        time: '',
        fathername: '',
        fatherno: '',
        motherno: '',
        address: '',
        bus: ''
      })
      const [error , setError]= useState('')
      async function sendDataToApi(){
        let res = await axios.post(`http://localhost:5000/students/register`,student);
        
      }
      function getStudentData(e){
        let myStudent={...student};
        myStudent[e.target.name]= e.target.value;
        setStudent(myStudent);
        console.log(myStudent);
      }
      function submitRegisterForm(e){
        e.preventDefault();
        let validation = validateRegisterForm();
        console.log(validation);
        if(validation.error){
            seterrorList(validation.error.details)
            window.alert("يجب ملئ جميع البيانات")

       }else{
        sendDataToApi();
       }
      }
      function validateRegisterForm(){
        let scheme= Joi.object({
          name:Joi.string().required(),
          gender:Joi.string().required(),
          nationality:Joi.string().required(),
          kinder:Joi.string().required(),
          time:Joi.string().required(),
          fathername:Joi.string().required(),
          address:Joi.string().required(),
          bus:Joi.string().required(),
          age:Joi.string(),
          cid:Joi.number().required(),
          fatherno:Joi.number().required(),
          motherno:Joi.number().required(),    
        });
        return scheme.validate(student, {abortEarly:false});
      }
    // const [tpost, setPost] =useState({
    //     name:'',
    //     gender: '',
    //     nationality: '',
    //     cid: '',
    //     kinder: '',
    //     time: '',
    //     fathername: '',
    //     fatherno: '',
    //     motherno: '',
    //     address: '',
    //     bus: '',
    // })

    // const handleInput =(event)=>{
    //     setPost({...tpost, [event.target.name]: event.target.value})

    // }

    // function handleSubmit(event){
    //     event.preventDefault();
    //     axios.post('http://localhost:5000/students/register', tpost)
    //     .then(response => {
    //         console.log(response);
    //         window.alert("تم حفظ بيانات الطالب بنجاح");
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //         window.alert("المعلومات التى ادخلتها بها خطأ..حاول مرة اخرى");
    //     } )
    // }

  return (
    <>
    <div className="container py-5 register-container">
        <li className="h2">التسجيل الالكتروني المباشر</li>
        <form action="" onSubmit={submitRegisterForm}>
            <div className="row py-3">
                <div className="col-md-6">
                    <label htmlFor="">الإسم</label>
                    <input type="text" name='name' onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الجنس</label>
                    <select className='w-100' name='gender' onChange={getStudentData}>
                    <option></option>
                    <option>ذكر</option>
                    <option>أنثى</option>
                   </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الجنسية</label>
                    <input type="text" name='nationality'  onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم السجل المدني</label>
                    <input type="text" name='cid' onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الروضة المراد التسجيل بها</label>
                    <input type="text"name='kinder'  onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">وقت دوام الطالب</label>
                    <select className='w-100' name='time' onChange={getStudentData}>
                    <option>الرجاء اختيار توقيت دوام الطالب</option>
                    <option>صباحي</option>
                    <option>مسائي</option>
                   </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">اسم ولي الأمر</label>
                    <input type="text" name='fathername' onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الفئة العمرية</label>
                    <select className='w-100' name='age'>
                    <option>الرجاء الاختيار مستوي الطفل</option>
                    <option>من 1 إلى 3 سنوات(الحضانة)</option>
                    <option>من 3 إلى 4 سنوات(المستوى الأول)</option>
                    <option>من 4 إلى 5 سنوات(المستوى الثانى)</option>
                    <option>من 5 إلى 6 سنوات(المستوى الثالث)</option>
                   </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم جوال الأب</label>
                    <input type="text" name='fatherno' onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم جوال الأم</label>
                    <input type="text" name='motherno' onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الحي</label>
                    <input type="text" name='address' onChange={getStudentData}/>
                </div>
                <div className="col-md-6">
                <label htmlFor="">الإشتراك في البا ص (برسوم إضافية)</label>
                <select className='w-100' name='bus' onChange={getStudentData}>
                 <option>الإشتراك في الباص (برسوم إضافية)</option>
                 <option>ذهاب و عودة (١٠٠٠ر.س)</option>
                 <option>ذهاب فقط (٥٠٠ر.س)</option>
                  <option>عودة فقط (٥٠٠ر.س)</option>
                 </select>
                </div>
            </div>
            <div className='text-center'>
            <button className='btn submit-btn' type='submit'>تسجيل</button>
            </div>
        </form>
    </div>
    </>
  )
}
