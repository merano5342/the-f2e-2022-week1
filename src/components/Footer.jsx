import sponsor1 from '../assets/images/9-l-a.png'
import sponsor2 from '../assets/images/9-l-b.png'
import sponsor3 from '../assets/images/9-l-c.png'
import Star from '../assets/images/banner/star.png'

import Animate from './unit/animation'


const Footer = () => {
  return (
    <section className='relative ' id="footer">
      <img src={Star} alt="Star" className='star absolute bottom-[20%] left-[14%]' />
      <img src={Star} alt="Star" className='star absolute bottom-[74%] right-[20%] ' />
      <img src={Star} alt="Star" className='star absolute bottom-[84%] right-[28%] h-[3rem]' />
      <div className="flex flex-col pt-40  justify-center items-center h-full" >


        <h2 className='p-10'>
          贊助單位
        </h2>
        <Animate.ScaleIn3>

          <div className="flex flex-col max-w-4xl md:flex-row gap-10">
            <img src={sponsor1} alt="" className="w-40 rounded-2xl border-pink p-1 bg-white" />
            <img src={sponsor2} alt="" className="w-40 rounded-2xl border-pink p-1  bg-white" />
            <img src={sponsor3} alt="" className="w-40 rounded-2xl border-pink p-1  bg-white" />
          </div>
        </Animate.ScaleIn3>

      </div>

      <div className="flex w-full justify-center bg-white absolute bottom-0">
        <p className="text-sm text-center my-8 ">
          Copyright © 2022 HexSchool.All rights reserved.</p>
      </div>
    </section>

  );
};

export default Footer;