import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Zad() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPos = window.pageYOffset;
        const isVisible = scrollPos > sectionTop - window.innerHeight + sectionHeight / 2;
        if (isVisible) {
          section.classList.add('fade-in');
        } else {
          section.classList.remove('fade-in');
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const firstSection = document.querySelector('.section');
    firstSection.classList.add('fade-in');
  }, []);
  return (
    <>
    <div className="container py-5 zadAcademy">
    <div className="section zad-heading d-flex align-items-center justify-content-center">
                <span className="light-green dot"></span>
                <span className="dot bink"></span>
                <h1> روضة زاد الطفل </h1>
                <span className="dot bink"></span>
                <span className="light-green dot"></span>
        </div>
        <div className='section'>
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
    </>
  )
}
