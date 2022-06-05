
import React from 'react'

import s1 from '../../../assets/image/sponsor/s1_google.png';
import s2 from '../../../assets/image/sponsor/s2_gdg.jpg';
import s3 from '../../../assets/image/sponsor/s3_mbi.jpg';
import s4 from '../../../assets/image/sponsor/s4_dnes.png';
import s5 from '../../../assets/image/sponsor/s5_vintech.png';
import s6 from '../../../assets/image/sponsor/s6_vng.png';
import s7 from '../../../assets/image/sponsor/s7_phong_vu.png';
import s8 from '../../../assets/image/sponsor/s8_teko.png';
import s9 from '../../../assets/image/sponsor/s9_mgm.png';
import s10 from '../../../assets/image/sponsor/s10_kms.png';

export default function BrandSection() {
    return(
       <>
       {/* Brand Area*/}
        <div className="brand-area">
        <div className="container">
            <div className="row justify-content-center align-items-center">
            <div className="col-12" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
                <div className="brand-area-logos d-flex justify-content-center justify-content-xl-between align-items-center flex-wrap">
                <div className="brand-area__single">
                    <img src={s1} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={s2} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                  <img src={s3} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={s4} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={s5} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                  <img src={s6} alt="brand" className="w-100" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

       </>
    )
}