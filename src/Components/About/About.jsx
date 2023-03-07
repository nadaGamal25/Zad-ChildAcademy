import React from 'react'

export default function About() {
  return (
    <>
    <div className="container about py-5">
        <div className="about-heading d-flex align-items-center justify-content-center">
                <span className="orange dot"></span>
                <span className="dot bink"></span>
                <h1> من نحن </h1>
                <span className="dot bink"></span>
                <span className="orange dot"></span>
        </div>
        <div className='pb-5'>
          <h3>أكاديمية تربوية تعليمية ذات مناهج خاصة هدفنا التميز والإنفراد بالعطاء التربوي والإستثمار فى مجال الطفولة المبكرة التي ستقود الغد</h3>
          <ul>
          <li><i class="fa-solid fa-check"></i> خبرة فى مجال الطفولة المبكرة .</li>
          <li><i class="fa-solid fa-check"></i> برامج تعليمية عالمية مميزة ومنتقاة زاد الطفل .</li>
          <li><i class="fa-solid fa-check"></i> كادر تعليمي ذو خبرات علمية وتعليمية .</li>
          <li><i class="fa-solid fa-check"></i> إشراف فني فى مجال الطفولة المبكرة .</li>
          <li><i class="fa-solid fa-check"></i> كادر إداري ذو خبرة في النواحي الإدارية .</li>
          <li><i class="fa-solid fa-check"></i> إستشارات أسرية وتربوية .</li>
          </ul>
        </div>
        <div className="row g-3">
        <div className="col-md-5">
          <div className="about-card h-100 text-center">
          <i class="fa-regular fa-eye"></i>
          <h3>رؤيتنا</h3>
          <p>تخريج أطفال حافظين لجزء عم متخلقين بالآداب الإسلامية مجيدين لقراءة و كتابة الأحرف والأرقام بصورة صحيحة .</p>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5">
        <div className="about-card h-100 text-center">
        <i class="fa-solid fa-envelope-open"></i>
        <h3>رسالتنا</h3>
        <p>نحن نعمل كمحضن تربوي نعنى بتعليم القرآن الكريم ورسم منهج صحيح للطفل من خلال مناهج تربوية هادفة وتقنيات حديثة وكوادر مؤهلة لتخريج أطفال متفوقين.</p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
