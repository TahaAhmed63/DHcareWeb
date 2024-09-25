import React, { useEffect } from 'react'
import MainPagesBanner from '../Components/ElementComponents/MainPagesBanner'
import bgimage from "./../assest/image-34.webp";
import { Helmet } from 'react-helmet-async';
// import ServicesSec1Design from '../Components/ElementComponents/ServicesComponnents/ServicesSec1Design';
import img1 from "./../assest/elderly.webp"
import ResourcesSec1 from '../Components/ElementComponents/ResourceComponent/ResourseSec1';

const ElderAbuse = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<Helmet>
                <title>Elderly Abuse</title>
                <meta name="description" content="Frequently Asked Questions" />
            </Helmet>
            <MainPagesBanner bgimage={bgimage} pagetitle={'Elder abuse'} />

        <div className="row mb-3 text-wraper max-limit">
            <div className="col-12">
                <div className="text-wrap d-flex justify-content-center w-75 mx-auto">
                <strong className='text-center'>Elder abuse refers to the mistreatment of older adults, including physical, emotional, sexual abuse, financial exploitation, and neglect. It can occur in various settings, including homes, nursing facilities, and assisted living communities.
                </strong>
                </div>
             
               
            </div>
            </div>
            <div className="first-row my-4">
            <ResourcesSec1 extraclass={['additional-page-img']} alignItem={'right'}  rightimg={img1} head={'Hotlines and Reporting'} contentHtml={`<p>National Elder Abuse Hotline: 1-833-372-8310<br>
Provides information and support for elder abuse issues.</p>

<p>New York State Elder Abuse Hotline: 1-844-697-3505<br>
Report elder abuse in New York State.</p>

<p>New York City Elder Abuse Hotline: 311<br>
For residents of New York City, dial 311 to report elder abuse or get assistance.</p>

<p>National Domestic Violence Hotline: 800-799-7233 (24/7)<br>
National Domestic Violence Hotline.</p>

<p>Eldercare Locator: 800-677-1116, eldercarelocator@USAging.org<br>
Eldercare Locator</p>

<p>National Elder Fraud Hotline: 833-FRAUD-11 (833-372-8311)<br>
National Elder Fraud Hotline</p>`} />

            </div>
            <div className="second-row my-4">
            <ResourcesSec1 extraclass={['additional-page-img']} alignItem={'left'}  rightimg={img1} head={'Organizations and Resources'} contentHtml={`
<p>New York State Office for the Aging<br>
Website: <a href="https://nyscaoa.org" target="_blank" rel="noreferrer">nyscaoa.org</a><br>
Offers resources and support for aging New Yorkers, including information on elder abuse.</p>

<p>Adult Protective Services (APS)<br>
Website: <a href="https://ocfs.ny.gov/main/adult/aps" target="_blank" rel="noreferrer">ocfs.ny.gov/main/adult/aps</a><br>
Provides services to protect adults with disabilities and older adults from abuse and neglect.</p>

<p>National Adult Protective Services Association: 202-370-6292<br>
National Adult Protective Services Association</p>

<p>The National Center on Elder Abuse (NCEA)<br>
Website: <a href="https://ncea.acl.gov" target="_blank" rel="noreferrer">ncea.acl.gov</a><br>
Offers a range of resources on elder abuse prevention, research, and reporting.</p>

<p>Elder Justice Initiative<br>
Website: <a href="https://justice.gov/elderjustice" target="_blank" rel="noreferrer">justice.gov/elderjustice</a><br>
A U.S. Department of Justice initiative focusing on protecting older adults from abuse and exploitation.</p>

<p>Consumer Financial Protection Bureau, Office for Older Americans: 855-411-2372, olderamericans@cfpb.gov<br>
Consumer Financial Protection Bureau</p>
`} />

                </div>

     

</>
  )
}

export default ElderAbuse