import React, { useEffect } from 'react'
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Servicesbgsec = (props) => {
    const {bgimage,List1,List2,head1}=props
useEffect(()=>{

    
    gsap.from('.all-list', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.all-list',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reset'
        }
    });
},[])
  

  return (
  <section className="single-page-bg-row d-flex align-items-center flex-reverse max-limit" style={{backgroundImage:bgimage,}}>
    <div className="container">
    <div className="row align-items-center flex-row-reverse">
    <div className="col-md-6 col-6">
        <div className="small-text-main">
            <h2>
                {head1}
            </h2>
            <ul>
{
    List1?.map((e,i)=>(
<li key={i} className='all-list'><i class="fa-solid fa-check"></i>{e}</li>
    ))
}
            </ul>
        </div>
    </div>
    <div className="col-md-6 col-6">
    <div className="small-text-main">
          
            <ul>
{
    List2?.map((e,i)=>(
<li key={i}  className='all-list'><i class="fa-solid fa-check"></i>{e}</li>
    ))
}
            </ul>
        </div>
    </div>
</div>
    </div>

  </section>
  )
}

export default Servicesbgsec