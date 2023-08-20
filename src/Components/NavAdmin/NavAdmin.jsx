import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function NavAdmin() {
    let navigate= useNavigate(); //hoke

    function logout(){
        localStorage.removeItem("token");
        // setToken(null);
        navigate('/loginAdmin')
      }
    
  return (
    <>
    <div className="colors"></div>
<nav class="navbar navbar-expand-lg navbar" dir='ltr'>
<div class="container-fluid">
<button className="navbar-brand ps-2 logout" href="#" onClick={logout}>
<i class="fa-solid fa-circle-left"></i>
   خروج
</button>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0" dir='rtl'>
  <li class="nav-item bg-light-green">
  <i class="fa-solid fa-users"></i>
      <Link class="nav-link" to="studentListAdmin">قائمة الطلاب</Link>
    </li>
    <li class="nav-item bg-bink">
    <i class="fa-solid fa-user-plus"></i>
      <Link class="nav-link" to="AddStudentAdmin">اضافة طالب </Link>
    </li>
    <li class="nav-item bg-green">
    <i class="fa-solid fa-unlock-keyhole"></i>
      <Link class="nav-link" to="ChangePassAdmin"> كلمة المرور </Link>
    </li>
    
  </ul>
  
</div>
</div>
</nav>
</>  )
}
