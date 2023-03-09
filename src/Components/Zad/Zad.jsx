import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Zad() {
  const [showSection, setShowSection] = useState(false);

    useEffect(() => {
      setShowSection(true);
    }, []);
  return (
    <>
    <div className="container py-5 zadAcademy">
      <div className={`sectionToUp ${showSection ? 'fade-in-from-bottom' : ''}`}>
    <div className="zad-heading d-flex align-items-center justify-content-center">
                <span className="light-green dot"></span>
                <span className="dot bink"></span>
                <h1> روضة زاد الطفل </h1>
                <span className="dot bink"></span>
                <span className="light-green dot"></span>
        </div>
        <div>
            <h3>تتميز الأكاديمية بوجود :</h3>
            <ul>
            <li><i class="fa-solid fa-bolt"></i> معلمات متميزات في التعليم والتعامل مع الطفل</li>
            <li><i class="fa-solid fa-bolt"></i> وجود منهج متكامل للوحدات الدراسية</li>
            <li><i class="fa-solid fa-bolt"></i> وجود زاد الطفل المسلم و وجود معمل الحاسب الآلي و وجود قاعدة نورانية و لغة إنجليزية و الحساب الذهني</li>
            <li><i class="fa-solid fa-bolt"></i> الفصول مجهزة ومتكاملة ومريحة للطفل وتشمل على أركان لتنمية وتطوير مهارات وقدرات الطفل </li>
            <li><i class="fa-solid fa-bolt"></i> يوجد ساحة لعب خارجية تحتوى على ألعاب مسلية</li>
            <li><i class="fa-solid fa-bolt"></i> يوجد أيضا مكان مخصص لتناول الوجبة بكل أريحية </li>
            <li><i class="fa-solid fa-bolt"></i> تقام بشكل دوري أنشطة متنوعة وهادفة للطفل</li>
            </ul>
            <Link to="/register" className="btn zad-btn">التسجيل الان</Link>
        </div>
        </div>
    </div>
    </>
  )
}
