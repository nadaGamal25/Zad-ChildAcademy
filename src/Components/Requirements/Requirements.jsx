import React,{useEffect,useState} from 'react'

export default function Requirements() {
  const [showSection, setShowSection] = useState(false);

    useEffect(() => {
      setShowSection(true);
    }, []);
  return (
    <>
    <div className=" container py-5 require">
      <div className={`sectionToUp ${showSection ? 'fade-in-from-bottom' : ''}`}>
    <div className=" require-heading pt-5 d-flex align-items-center justify-content-center">
                <span className="dot voilet"></span>
                <span className="voilet dot"></span>
                <h1> متطلبات التسجيل </h1>
                <span className="voilet dot"></span>
                <span className="dot voilet"></span>
        </div>
        <div className=' pb-5'>
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
    </div>
    </>
  )
}
