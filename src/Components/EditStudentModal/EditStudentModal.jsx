import { useState } from 'react';
import axios from 'axios';

export default function EditStudentModal({ student, onClose }) {
  const [formData, setFormData] = useState(student);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://zadkinder.onrender.com/admin/edit-student/${student._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(response.data);
      console.log(response.data.msg);

      onClose();
      window.alert("تم تعديل الطالب بنجاح,قم بأعادة تحميل الصفحة")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className="my-3">
      <div className="p-5 editsection">
      <h3 className='text-primary'><i class="fa-solid fa-user-graduate ps-2"></i>تعديل الطالب: </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">الإسم</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">الجنس</label>
            <input type="text" className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="nationality">الجنسية</label>
            <input type="text" className="form-control" id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cid">رقم السجل المدني</label>
            <input type="text" className="form-control" id="cid" name="cid" value={formData.cid} onChange={handleInputChange} />
          </div>
          <div className="form-group">
          <label htmlFor="kinder">الروضة المراد التسجيل بها</label>
                    <select className="form-control" id="kinder" name='kinder' value={formData.kinder} onChange={handleInputChange}>
                    <option>الرجاء اختيار الروضة</option>
                    <option>زاد الطفل</option>
                    <option>قطوف الطفل</option>
                   </select>
          </div>
          <div className="form-group">
          <label htmlFor="time">وقت دوام الطالب</label>
                    <select className='form-control' id='time' name='time'  onChange={handleInputChange}>
                    <option>الرجاء اختيار توقيت دوام الطالب</option>
                    <option>صباحي</option>
                    <option>مسائي</option>
                   </select>
          </div>
          <div className="form-group">
            <label htmlFor="fathername">اسم ولى الامر</label>
            <input type="text" className="form-control" id="fathername" name="fathername" value={formData.fathername} onChange={handleInputChange} />
          </div>
          <div className="form-group">
          <label htmlFor="age">الفئة العمرية</label>
                    <select className='form-control' id='age' name='age' value={formData.age} onChange={handleInputChange}>
                    <option>الرجاء الاختيار مستوي الطفل</option>
                    <option>من 1 إلى 3 سنوات(الحضانة)</option>
                    <option>من 3 إلى 4 سنوات(المستوى الأول)</option>
                    <option>من 4 إلى 5 سنوات(المستوى الثانى)</option>
                    <option>من 5 إلى 6 سنوات(المستوى الثالث)</option>
                   </select>
            <label htmlFor="fatherno">جوال الاب</label>
            <input type="text" className="form-control" id="fatherno" name="fatherno" value={formData.fatherno} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="motherno">جوال الام</label>
            <input type="text" className="form-control" id="nationamothernolity" name="motherno" value={formData.motherno} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">الحى</label>
            <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <div className="form-group">
          <label htmlFor="bus">الإشتراك في الباص (برسوم إضافية)</label>
                <select className='form-control' id='bus' name='bus' value={formData.bus} onChange={handleInputChange}>
                 <option>الإشتراك في الباص (برسوم إضافية)</option>
                 <option>ذهاب و عودة (١٠٠٠ر.س)</option>
                 <option>ذهاب فقط (٥٠٠ر.س)</option>
                  <option>عودة فقط (٥٠٠ر.س)</option>
                 </select>
          </div>
          
        
          <button type="submit" className="btn btn-primary m-2">حفظ التغييرات</button>
          <button type="button" className="btn btn-secondary m-2" onClick={onClose}>إغلاق</button>
        </form>
      </div>
    </div>
    </>
  );
}
