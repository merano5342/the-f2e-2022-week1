import sponsor1 from '../assets/images/9-l-a.png'
import sponsor2 from '../assets/images/9-l-b.png'
import sponsor3 from '../assets/images/9-l-c.png'


const Footer = () => {
  return (
    <section className="relative flex flex-col justify-center" id="footer">

      <h2 className='p-10'>
        贊助單位
      </h2>
      <div className="grid grid-cols-3 gap-4 sm:gap-10 pb-10">
        <img src={sponsor1} alt="" className="rounded-2xl border-pink p-1 sm:p-3 md:p-8 bg-white" />
        <img src={sponsor2} alt="" className="rounded-2xl border-pink p-1 sm:p-3 md:p-8 bg-white" />
        <img src={sponsor3} alt="" className="rounded-2xl border-pink p-1 sm:p-3 md:p-8 bg-white" />
      </div>
      <div className="footer flex w-full absolute bottom-0 left-0 items-center justify-center bg-white">
        <p className="text-sm text-center my-8 ">
          Copyright © 2022 HexSchool.All rights reserved.</p>

      </div>
    </section>

  );
};

export default Footer;
