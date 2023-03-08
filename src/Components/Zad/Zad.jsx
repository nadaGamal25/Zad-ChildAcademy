import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export default function Zad() {
  return (
    <>
    <div className="container py-5 zadAcademy">
    <Fade top duration={1200}>

    <div className="zad-heading d-flex align-items-center justify-content-center">
                <span className="light-green dot"></span>
                <span className="dot bink"></span>
                <h1> روضة زاد الطفل </h1>
                <span className="dot bink"></span>
                <span className="light-green dot"></span>
        </div>
        </Fade>
        <div>
        <Fade top duration={1200}>
            <h3>تتميز الأكاديمية بوجود :</h3>
            </Fade>
            <ul>
            <Fade top duration={1200}>
            <li><i class="fa-solid fa-bolt"></i> معلمات متميزات في التعليم والتعامل مع الطفل</li>
            <li><i class="fa-solid fa-bolt"></i> وجود منهج متكامل للوحدات الدراسية</li>
            <li><i class="fa-solid fa-bolt"></i> وجود زاد الطفل المسلم و وجود معمل الحاسب الآلي و وجود قاعدة نورانية و لغة إنجليزية و الحساب الذهني</li>
            <li><i class="fa-solid fa-bolt"></i> الفصول مجهزة ومتكاملة ومريحة للطفل وتشمل على أركان لتنمية وتطوير مهارات وقدرات الطفل </li>
            <li><i class="fa-solid fa-bolt"></i> يوجد ساحة لعب خارجية تحتوى على ألعاب مسلية</li>
            <li><i class="fa-solid fa-bolt"></i> يوجد أيضا مكان مخصص لتناول الوجبة بكل أريحية </li>
            <li><i class="fa-solid fa-bolt"></i> تقام بشكل دوري أنشطة متنوعة وهادفة للطفل</li>
            </Fade>
            </ul>
            <Link to="/register" className="btn zad-btn">التسجيل الان</Link>
        </div>
    </div>
    </>
  )
}
