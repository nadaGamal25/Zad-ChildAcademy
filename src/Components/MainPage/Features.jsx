import React,{useEffect,useState} from 'react'
import img1  from '../../assets/8.png'
import img2  from '../../assets/9.png'
import img3  from '../../assets/10.png'
import img4  from '../../assets/11.png'
import img5  from '../../assets/12.png'
import img6  from '../../assets/13.png'
import img7  from '../../assets/14.png'
import img8  from '../../assets/15.png'

export default function Features() {
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
    <section className="py-5">
        <div className="container pt-5">
            <div className="section feature-heading d-flex align-items-center justify-content-center">
                <span className="dot bink"></span>
                <span className="light-green dot"></span>
                <h1> ما يميزنا </h1>
                <span className="light-green dot"></span>
                <span className="dot bink"></span>

            </div>
            <div className="features row pt-4">
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-orange">
                    <span><img src={img1} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>مناهج دراسية مميزة</h2>
                            <p>تم اختيارها بكل عناية لتناسب أطفالكم حسب أعمارهم.</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-light-green">
                    <span><img src={img2} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>برامج صباحية ومسائية</h2>
                            <p>
                            حرصا منا على راحتكم...الآن يمكنك تسجيل طفلك بالأكاديمية بالفترةالصباحيةوالمسائية حسب مايتناسب مع وقتكم.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-bink">
                    <span><img src={img3} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>دروس تقوية</h2>
                            <p>وفرنا لكم دروس تقوية بالأكاديمية لأننا نحرص على زيادة المستوى التعليمي لطفلك.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-voilet">
                    <span><img src={img4} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>حضانة للطفل بالساعة</h2>
                            <p>متوفر لدينا بالأكاديمية حضانة للطفل بالساعة واليوم والشهر والتيرم .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-green">
                    <span><img src={img5} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>معلمات ذوات كفاءة</h2>
                            <p>نختار معلماتنا بعناية ذوات مؤهلات علمية وكفاءة عالية .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-orange">
                    <span><img src={img6} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>الاستشارات والتواصل</h2>
                            <p>نجيب عن الأسئلة التي تتبادر إلى ذهنك بخصوص طفلك ونرشدك لما هو أفضل له .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-voilet">
                    <span><img src={img7} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>النقل</h2>
                            <p>حرصا منا على راحتكم ..نؤمن لكم حافلات مريحةوآمنة لنقل أطفالكم من وإلى الروضة.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="feature d-flex bg-bink">
                    <span><img src={img8} alt="img" /></span>
                        <div className="feature-caption">
                            <h2>التسجيل الإلكتروني</h2>
                            <p>يمكنك تسجيل طفلك إلكترونياوسداد الرسوم عبر التحويل البنكي وأنت في مكانك .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}
