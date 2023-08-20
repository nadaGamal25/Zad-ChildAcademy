import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function StudentProfile() {
  const [studentData,setStudentData]=useState([])
  async function getStudentData() {
    try {
      const response = await axios.get('https://zadkinder.onrender.com/students/student-profile',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      });
      console.log(response.data.data)
      setStudentData(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getStudentData()
  },[])

  let navigate= useNavigate();
  function studentLogout(){
    localStorage.removeItem("userToken");
    navigate('/loginStudent')
  }
  return (
    <>
    <div className="p-5">
      <div className="p-4 student-container">
      <h3><i class="fa-solid fa-user-graduate ps-2"></i>حساب الطفل  </h3>
        <div className="row">

          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>الاسم :</h5>
              <h4> {studentData.name}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>ولى الأمر :</h5>
              <h4> {studentData.fathername}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>الجنس :</h5>
              <h4> {studentData.gender}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>رقم الهوية :</h5>
              <h4> {studentData.cid}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>الجنسية :</h5>
              <h4> {studentData.nationality}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>العنوان :</h5>
              <h4> {studentData.address}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center  py-3'>
              <h5>رقم هاتف الأب :</h5>
              <h4> {studentData.fatherno}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>رقم هاتف الأم :</h5>
              <h4> {studentData.motherno}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>الروضة :</h5>
              <h4> {studentData.kinder}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>وقت الدوام :</h5>
              <h4> {studentData.time}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex align-items-center py-3'>
              <h5>اشتراك الباص :</h5>
              <h4> {studentData.bus}</h4>
            </div>
          </div>
          
        </div>
      </div>
      {/* <button className="m-5 btn btn-danger text-center" onClick={studentLogout}>
       تسجيل الخروج
    </button> */}
    </div>
    </>
  )
}
