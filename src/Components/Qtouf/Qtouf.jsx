import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Qtouf() {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    setShowSection(true);
  }, []);
  return (
    <>
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
           
            <Link to="/register" className="btn qtouf-btn">التسجيل الان</Link>
        </div>
        </div>
    </div>
    </>
  )
}
