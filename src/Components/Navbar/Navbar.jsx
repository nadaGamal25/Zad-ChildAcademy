import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <>
        <div className="colors"></div>
    <nav class="navbar navbar-expand-lg navbar" dir='ltr'>
  <div class="container-fluid">
    <Link to='/' class="navbar-brand ps-2 logo" href="#"><img src={logo} alt="logo" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" dir='rtl'>
      <li class="nav-item bg-light-green">
        <i class="fa-solid fa-house-chimney"></i>
          <Link class="nav-link" to="about">من نحن</Link>
        </li>
      <li class="nav-item dropdown bg-bink">
          <i class="fa-solid fa-list-ul"></i>
          <a class="nav-link border-bink" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          روضاتنا      
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><Link class="dropdown-item" to="zad">روضة زاد الطفل</Link></li>
            <li><Link class="dropdown-item" to="qtouf">روضة قطوف الطفل</Link></li>
          </ul>
        </li>
        
        <li class="nav-item bg-orange">
        <i class="fa-solid fa-book"></i>
          <Link class="nav-link border-orange" to="programmes">البرامج والرسوم المدرسية</Link>
        </li>
        
          <li class="nav-item dropdown bg-green">
          <i class="fa-solid fa-file-pen"></i>
          <a class="nav-link border-green" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          التسجيل      
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><Link class="dropdown-item" to="register">التسجيل الالكتروني المباشر</Link></li>
            <li><Link class="dropdown-item" to="requirements">متطلبات التسجيل</Link></li>
          </ul>
        </li>
        <li class="nav-item bg-orange">
        <i class="fa-solid fa-book-open"></i>
          <Link class="nav-link border-orange" to="loginStudent">حساب الطفل</Link>
        </li>
       
          <li class="nav-item dropdown bg-light-green">
          <i class="fa-solid fa-briefcase"></i>
          <a class="nav-link border-lightgreen" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          إنضم إلينا      
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><Link class="dropdown-item" to="#">التطوع</Link></li>
            <li><Link class="dropdown-item" to="#">التوظيف</Link></li>
          </ul>
        </li>
        <li class="nav-item bg-bink ">
        <i class="fa-regular ii fa-comments"></i>
          <Link class="nav-link border-bink" href="#">تواصل معنا</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
