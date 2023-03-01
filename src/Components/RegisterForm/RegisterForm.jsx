import React from 'react'

export default function RegisterForm() {
  return (
    <>
    <div className="container py-5 register-container">
        <li className="h2">التسجيل الالكتروني المباشر</li>
        <form action="">
            <div className="row py-3">
                <div className="col-md-6">
                    <label htmlFor="">الإسم</label>
                    <input type="text" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الجنس</label>
                    <input type="text" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الجنسية</label>
                    <input type="text" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم السجل المدني</label>
                    <input type="text" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الروضة المراد التسجيل بها</label>
                    <input type="text" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">وقت دوام الطالب</label>
                    <select className='w-100'>
                    <option>الرجاء اختيار توقيت دوام الطالب</option>
                    <option>صباحي</option>
                    <option>مسائي</option>
                   </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">اسم ولي الأمر</label>
                    <input type="text" />
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
                    <input type="text" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">رقم جوال الأم</label>
                    <input type="text" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">الحي</label>
                    <input type="text" />
                </div>
                <div className="col-md-6">
                <label htmlFor="">الإشتراك في البا ص (برسوم إضافية)</label>
                <select className='w-100'>
                 <option>الإشتراك في الباص (برسوم إضافية)</option>
                 <option>ذهاب و عودة (١٠٠٠ر.س)</option>
                 <option>ذهاب فقط (٥٠٠ر.س)</option>
                  <option>عودة فقط (٥٠٠ر.س)</option>
                 </select>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}
