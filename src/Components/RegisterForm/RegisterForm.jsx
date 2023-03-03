import axios from 'axios';
import React, { useState } from 'react'

export default function RegisterForm() {
    const [post, setPost] =useState({
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
        bus: '',
    })

    const handleInput =(event)=>{
        setPost({...post, [event.target.name]: event.target.value})

    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/students/register', {post})
        .then(response => {
            console.log(response);
            window.alert("تم حفظ بيانات الطالب بنجاح");
        })
        .catch(err=>{
            console.log(err);
            window.alert("المعلومات التى ادخلتها بها خطأ..حاول مرة اخرى");
        } )
    }

  return (
    <>
    <div className="container py-5 register-container">
        <li className="h2">التسجيل الالكتروني المباشر</li>
        <form action="" onSubmit={handleSubmit}>
            <div className="row py-3">
                <div className="col-md-6">
                    <label htmlFor="">الإسم</label>
                    <input type="text" name='name' onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الجنس</label>
                    <input type="text" name='gender' onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الجنسية</label>
                    <input type="text" name='nationality'  onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم السجل المدني</label>
                    <input type="text" name='cid' onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الروضة المراد التسجيل بها</label>
                    <input type="text"name='kinder'  onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">وقت دوام الطالب</label>
                    <select className='w-100' name='time' onChange={handleInput}>
                    <option>الرجاء اختيار توقيت دوام الطالب</option>
                    <option>صباحي</option>
                    <option>مسائي</option>
                   </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">اسم ولي الأمر</label>
                    <input type="text" name='fathername' onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الفئة العمرية</label>
                    <select className='w-100'>
                    <option>الرجاء الاختيار مستوي الطفل</option>
                    <option>من 1 إلى 3 سنوات(الحضانة)</option>
                    <option>من 3 إلى 4 سنوات(المستوى الأول)</option>
                    <option>من 4 إلى 5 سنوات(المستوى الثانى)</option>
                    <option>من 5 إلى 6 سنوات(المستوى الثالث)</option>
                   </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم جوال الأب</label>
                    <input type="text" name='fatherno' onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم جوال الأم</label>
                    <input type="text" name='motherno' onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الحي</label>
                    <input type="text" name='address' onChange={handleInput}/>
                </div>
                <div className="col-md-6">
                <label htmlFor="">الإشتراك في البا ص (برسوم إضافية)</label>
                <select className='w-100' name='bus' onChange={handleInput}>
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
