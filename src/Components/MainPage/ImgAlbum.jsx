import React,{useEffect,useState} from 'react'

export default function ImgAlbum() {
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
    <section className="">
        <div className="container img-albums">
        <div className="section album-heading d-flex align-items-center justify-content-center">
                <span className="dot green"></span>
                <span className="light-green dot"></span>
                <h1> ألبومات الصور </h1>
                <span className="light-green dot"></span>
                <span className="dot green"></span>
        </div>
        <div className="row text-center g-3 mb-5 py-4">
            <div className="col-md-6 col-sm-6 text-center section">
                <div className="grey-col mx-3">
                    <h2 className='green'>أكــاديـمـيــة زاد الـطـفـــل</h2>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 text-center section">
                <div className="grey-col mx-3">
                    <h2 className='orange'>أكاديمية قطوف للطفل</h2>
                </div>
            </div>
            <div className="section imgs">
            <div className="albums1"></div>
            <div className="albums2"></div>                
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
