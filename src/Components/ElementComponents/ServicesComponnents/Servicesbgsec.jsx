import React from 'react'

const Servicesbgsec = (props) => {
    const {bgimage,List1,List2,head1}=props
  return (
  <section className="single-page-bg-row d-flex align-items-center flex-reverse" style={{backgroundImage:bgimage,}}>
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
<li key={i}><i class="fa-solid fa-check"></i>{e}</li>
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
<li key={i}><i class="fa-solid fa-check"></i>{e}</li>
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