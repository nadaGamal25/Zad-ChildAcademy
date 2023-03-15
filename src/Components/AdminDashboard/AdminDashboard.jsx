import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TheFormRegister from '../TheFormRegister/TheFormRegister';

export default function AdminDashboard() {
  const [search, setSearch]= useState('')
  // console.log(search);
  const [studentData , setStudentData]= useState([]);
  const [visible, setVisible] =useState(10);

  const showMoreStudents =()=>{
    setVisible((prevValue) => prevValue + 10);
  }

  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
  async function getStudentData(){
    try {
     
      const { data } = await axios.get(
        `https://zadkinder-production.up.railway.app/admin/students/0`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(data.data);
      setStudentData(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getStudentData(10);
  }, []);
  useEffect(() => {
    // Count the number of objects with kinder equal to 'زاد الطفل'
    const zadCount = studentData.filter((obj) => obj.kinder === 'زاد الطفل').length;

    // Count the number of objects with kinder equal to 'قطوف الطفل'
    const qtoufCount = studentData.filter((obj) => obj.kinder === 'قطوف الطفل').length;

    
    document.querySelector('.zad-students').textContent = zadCount;
    document.querySelector('.qtouf-students').textContent = qtoufCount;
  }, [studentData]);

  return (
    <>
    <div className="p-5">
    <div className="admin-heading">
            <h1>لوحة التحكم</h1>
        </div>
        <div className="row py-5 g-4">
            <div className="col-md-6 col-sm-6 col-lg-4 ">
                <div className="sm-card text-center card1 h-100">
                <i class="fa-solid fa-graduation-cap"></i>
                <h3 className='pb-3'>إجمالى الطلاب</h3>
                <div className="d-flex pe-3">
                  <h4>زاد الطفل:</h4>
                  <h4 className='zad-students pt-1'></h4>    
                </div>
                <div className="d-flex pe-3">
                <h4>قطوف الطفل:</h4>
                <h4 className='qtouf-students pt-1'></h4>    
                </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="sm-card bg-bink text-center card2 h-100">
                <i class="fa-solid fa-person-chalkboard"></i>
                <h3 className='pb-3'>إجمالى المعلمات</h3>
                <div className="d-flex pe-3">
                  <h4>زاد الطفل:</h4>
                  <h4 className='zad-teachers pt-1'></h4>    
                </div>
                <div className="d-flex pe-3">
                <h4>قطوف الطفل:</h4>
                <h4 className='qtouf-teachers pt-1'></h4>    
                </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="sm-card bg-orange text-center card3 h-100">
                <i class="fa-solid fa-book-open-reader"></i>
                <h3 className='pb-3'>إجمالى المتطوعات </h3>
                <div className="d-flex pe-3">
                  <h4>زاد الطفل:</h4>
                  <h4 className='zad-volunteers pt-1'></h4>    
                </div>
                <div className="d-flex pe-3">
                <h4>قطوف الطفل:</h4>
                <h4 className='qtouf-volunteers pt-1'></h4>    
                </div>
                </div>
            </div>
            
            </div>
            <div className="students p-4">
          <div className="row g-2">
            <div className="col-md-6">
            <h3><i class="fa-solid fa-user-graduate ps-2"></i>قائمة الطلاب </h3>
            </div>
            <div className="col-md-6">
              <div class="search-input d-flex align-items-center">
              <button class="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input name="search" id="searchInput" onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="بحث بالأسم.."/>
                
                </div>
          </div>
          </div>
            <div className="student-table py-3">
            <table class="table bg-white">
   <thead>
    <tr>
      <th scope="col"><i class="fa-solid fa-clipboard-user"></i></th>
      <th scope="col">الإسم</th>
      <th scope="col">الجنس</th>
      <th scope="col">الجنسية</th>
      <th scope="col">السجل المدنى</th>
      <th scope="col">الروضة</th>
      <th scope="col">وقت الدوام</th>
      <th scope="col">ولى الأمر</th>
      <th scope="col">جوال الأب</th>
      <th scope="col">جوال الأم</th>
      <th scope="col">الحي</th>
      <th scope="col">اشتراك الباص</th>
    </tr>
   </thead>
  <tbody>
  
    {Array.isArray(studentData) && studentData.filter((item)=>{
      return search === ''? item : item.name.includes(search);
    }).slice(0,visible).map((item,index)=>{
      return(
        <tr key={index}>
      <th scope="row">{index +1}</th>
      <td>{item.name}</td>
      <td>{item.gender}</td>
      <td>{item.nationality}</td>
      <td>{item.cid}</td>
      <td>{item.kinder}</td>
      <td>{item.time}</td>
      <td>{item.fathername}</td>
      <td>{item.fatherno}</td>
      <td>{item.motherno}</td>
      <td>{item.address}</td>
      <td>{item.bus}</td>
    </tr>
      )
    })}
    
    
  </tbody>
            </table>
            <button className="btn more-btn" onClick={showMoreStudents}>عرض المزيد</button>
            </div>

            </div>   
        <div className="student-register p-4 my-3 register-container"> 
        <h2><i class="fa-solid ps-2 fa-user"></i>اضافة طالب جديد :</h2>
        <TheFormRegister/>
        </div> 
    </div>
    </>
  )
}
 /*
 

          
  .....
  <div className="col-md-6 col-sm-6 col-lg-3">
                <div className="sm-card bg-green text-center card4 h-100">
                <i class="fa-brands fa-buromobelexperte"></i>
                <h3>إجمالى الفصول</h3>
                <span> % </span>
                </div>
            </div>
        */