import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from '../LoadingPage';

export default function Zad() {
  const [showSection, setShowSection] = useState(false);

    useEffect(() => {
      setShowSection(true);
    }, []);
    const [loading, setLoading] = useState(true); 
    const timeoutId= useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
  return (
    <>
    {loading ? (
        <LoadingPage />
      ) : (
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
            <div className='row py-4 g-4'>
              <div className="col-md-3">
                  <div className="pnumber">
                  <i class="fa-solid fa-phone"></i>
                  <h5>0502357555</h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="snap">
                  <i class="fa-brands fa-snapchat"></i>
                  <h5>أكاديمية زاد الطفل</h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="location">
                  <i class="fa-solid fa-location-dot"></i>
                  <h5>خميس مشيط - حي الرصراص
مقابل مسجد الفالح</h5>
                  </div>
                </div>
            </div>
            <Link to="/register" className="btn zad-btn">التسجيل الان</Link>
        </div>
        </div>
    </div>
      )}
    </>
  )
}
