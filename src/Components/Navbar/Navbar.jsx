import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <div className="colors"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" dir='ltr'>
  <div class="container-fluid">
    <a class="navbar-brand ps-5" href="#"><span className='word1'>اكاديمية</span><br/><span className='word2'>زاد</span><span className='word3'>الطفل</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" dir='rtl'>
        <li class="nav-item bg-bink">
        <i class="fa-regular fa-comments"></i>
          <Link class="nav-link" href="#">تواصل معنا</Link>
        </li>
        <li class="nav-item bg-light-green">
        <i class="fa-solid fa-briefcase"></i>
          <Link class="nav-link" href="#">إنضم إلينا</Link>
        </li>
        <li class="nav-item bg-orange">
        <i class="fa-solid fa-book-open"></i>
          <Link class="nav-link" href="#">حساب الطفل</Link>
        </li>
        <li class="nav-item bg-green">
        <i class="fa-solid fa-file-pen"></i>
          <Link class="nav-link" to="register">التسجيل</Link>
        </li>
        <li class="nav-item bg-orange">
        <i class="fa-solid fa-book"></i>
          <Link class="nav-link" href="#">البرامج والرسوم المدرسية</Link>
        </li>
        <li class="nav-item bg-bink before-bink">
        <i class="fa-solid fa-bars"></i>
          <Link class="nav-link" href="#">روضاتنا</Link>
        </li>
        <li class="nav-item bg-light-green">
        <i class="fa-solid fa-house-chimney"></i>
          <Link class="nav-link" to="about">من نحن</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
