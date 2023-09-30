import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TheFormRegister from '../TheFormRegister/TheFormRegister';
import EditStudentModal from '../EditStudentModal/EditStudentModal';
import Logout from '../LoginAdmin/Logout ';
import { useNavigate } from 'react-router-dom';


export default function AdminDashboard({setToken}) {
  const [search, setSearch]= useState('')
  // console.log(search);
  const [studentData , setStudentData]= useState([]);
  // const [visible, setVisible] =useState(10);
  let navigate= useNavigate(); //hoke

  // const showMoreStudents =()=>{
  //   setVisible((prevValue) => prevValue + 10);
  // }
  useEffect(() => {
    const zadCount = studentData.filter((obj) => obj.kinder === 'زاد الطفل').length;
    const qtoufCount = studentData.filter((obj) => obj.kinder === 'قطوف الطفل').length;

    
    document.querySelector('.zad-students').textContent = zadCount;
    document.querySelector('.qtouf-students').textContent = qtoufCount;
  }, [studentData]);

  const removeStudent = async (id) => {
    try {
      const response = await axios.get(
        `https://zadkinder.onrender.com/admin/remove-student/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
        console.log(response.data.msg);
      setStudentData(studentData.filter((student) => student._id !== id));
        // If the student was successfully removed, update the student data
        // getStudentData(10);
      
    } catch (error) {
      console.error(error);
    }
  };
  
  
  const handleLogout = async () => {
    await fetch("https://zadkinder.onrender.com/admin/login", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    localStorage.removeItem("token");
    setToken(null);
  }
  async function getStudentData(){
    try {
      const response = await axios.get(`https://zadkinder.onrender.com/admin/students`,
       {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
      );

      setStudentData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching students:', error);
    }
   
  }
  useEffect(() => {
    getStudentData();
  }, []);

 

  
  function logout(){
    localStorage.removeItem("token");
    setToken(null);
    navigate('/loginAdmin')
  }

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
        
       
        {/* <Logout setToken={setToken} />
        <button className="m-5 btn btn-danger text-center" onClick={logout}>
       تسجيل الخروج
    </button> */}
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