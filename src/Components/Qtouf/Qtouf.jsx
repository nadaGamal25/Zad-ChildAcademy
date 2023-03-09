import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Qtouf() {
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
    <div className="container py-5 qtoufAcademy">
    <div className="qtouf-heading d-flex align-items-center justify-content-center section">
                <span className="green dot"></span>
                <span className="dot bink"></span>
                <h1> روضة قطوف الطفل </h1>
                <span className="dot bink"></span>
                <span className="green dot"></span>
        </div>
        <div className='section'>
            <h3>عن الروضة :</h3>
            <p>سنوات متواصلة من التميز والإبداع تهدف إلى تنمية مهارات الطفل وتعزيز السلوك بما يتماشى مع تعاليم الدين الإسلامي من خلال الوحدات التعليمية واللغة الإنجليزية والقاعدة النورانية والحساب الذهني تحت إشراف كادر تعليمي ذو خبرة .</p>
           
            <Link to="/register" className="btn qtouf-btn">التسجيل الان</Link>
        </div>
        
    </div>
    </>
  )
}
