import React,{useEffect,useState} from 'react'

export default function Requirements() {
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
    <div className="container py-5 require">
    <div className="section require-heading pt-5 d-flex align-items-center justify-content-center">
                <span className="dot voilet"></span>
                <span className="voilet dot"></span>
                <h1> متطلبات التسجيل </h1>
                <span className="voilet dot"></span>
                <span className="dot voilet"></span>
        </div>
        <div className='section pb-5'>
            <h3>عند الحضور للروضة لأول مرة يرجي إحضار الأوراق الثبوتية التالية لإكمال
عملية التسجيل:</h3>
            <ul>
                <li>
                 <i class="fa-regular fa-square-check"></i> شهادة الميلاد + صورة منها
                </li>
                <li>
                <i class="fa-regular fa-square-check"></i> كرت العائلة + صورة منه
                </li>
                <li>
                <i class="fa-regular fa-square-check"></i> كرت التطعيم + صورة منه
                </li>
                <li>
                <i class="fa-regular fa-square-check"></i> عدد 5 صورة شخصية للطالب
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}
