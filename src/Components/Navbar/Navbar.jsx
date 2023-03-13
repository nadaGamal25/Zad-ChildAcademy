import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import logo1 from '../../assets/1.png'
import logo2 from '../../assets/2.png'
import logo3 from '../../assets/3.png'
import logo4 from '../../assets/4.png'
import logo5 from '../../assets/5.png'
import logo6 from '../../assets/6.png'
import logo7 from '../../assets/7.png'
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
        <img className='sm' src={logo1} alt="logo" />
          <Link class="nav-link" to="about">من نحن</Link>
        </li>
      <li class="nav-item dropdown bg-bink">
      <img className='sm' src={logo2} alt="logo" />
          <a class="nav-link border-bink" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          روضاتنا      
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><Link class="dropdown-item" to="zad">روضة زاد الطفل</Link></li>
            <li><Link class="dropdown-item" to="qtouf">روضة قطوف الطفل</Link></li>
          </ul>
        </li>
        
        <li class="nav-item bg-orange">
        <img src={logo3} alt="logo" />
          <Link class="nav-link border-orange" to="programmes">البرامج والرسوم المدرسية</Link>
        </li>
        
          <li class="nav-item dropdown bg-green">
          <img src={logo4} alt="logo" />
          <a class="nav-link border-green" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          التسجيل      
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><Link class="dropdown-item" to="register">التسجيل الالكتروني المباشر</Link></li>
            <li><Link class="dropdown-item" to="requirements">متطلبات التسجيل</Link></li>
          </ul>
        </li>
        <li class="nav-item bg-orange">
        <img src={logo5} alt="logo" />
          <Link class="nav-link border-orange" to="loginStudent">حساب الطفل</Link>
        </li>
       
          <li class="nav-item dropdown bg-light-green">
          <img src={logo6} alt="logo" />
          <a class="nav-link border-lightgreen" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          إنضم إلينا      
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><Link class="dropdown-item" to="#">التطوع</Link></li>
            <li><Link class="dropdown-item" to="#">التوظيف</Link></li>
          </ul>
        </li>
        <li class="nav-item bg-bink ">
        <img src={logo7} alt="logo" />
          <Link class="nav-link border-bink" href="#">تواصل معنا</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
