import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from '../LoadingPage';

export default function Qtouf() {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    setShowSection(true);
  }, []);
  const [loading, setLoading] = useState(true); // set initial value to true
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
    <div className="container py-5 qtoufAcademy">
      <div className={`sectionToUp ${showSection ? 'fade-in-from-bottom' : ''}`}>
    <div className="qtouf-heading d-flex align-items-center justify-content-center">
                <span className="green dot"></span>
                <span className="dot bink"></span>
                <h1> روضة قطوف الطفل </h1>
                <span className="dot bink"></span>
                <span className="green dot"></span>
        </div>
        <div >
            <h3>عن الروضة :</h3>
            <p>سنوات متواصلة من التميز والإبداع تهدف إلى تنمية مهارات الطفل وتعزيز السلوك بما يتماشى مع تعاليم الدين الإسلامي من خلال الوحدات التعليمية واللغة الإنجليزية والقاعدة النورانية والحساب الذهني تحت إشراف كادر تعليمي ذو خبرة .</p>
            <div className='row py-4 g-4'>
              <div className="col-md-3">
                  <div className="pnumber">
                  <i class="fa-solid fa-phone"></i>
                  <h5>0507802302</h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="snap">
                  <i class="fa-brands fa-snapchat"></i>
                  <h5>أكاديمية قطوف الطفل 2</h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="location">
                  <i class="fa-solid fa-location-dot"></i>
                  <h5>خميس مشيط - طريق المدينة
العسكرية - خلف مطاعم السده</h5>
                  </div>
                </div>
            </div>

            <Link to="/register" className="btn qtouf-btn">التسجيل الان</Link>
        </div>
        </div>
    </div>
      )}
    </>
  )
}
