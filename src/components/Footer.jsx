import sponsor1 from '../assets/images/9-l-a.png'
import sponsor2 from '../assets/images/9-l-b.png'
import sponsor3 from '../assets/images/9-l-c.png'


const Footer = () => {
  return (
    <section className="flex flex-col justify-center relative" id="footer">

      <h2 className='p-10'>
        贊助單位
      </h2>
      <div className="grid m-6 md:grid-cols-3 justify-center gap-5 md:gap-10 mb-10">
        <img src={sponsor1} alt="" className="rounded-2xl border-pink p-1 md:p-3 lg:p-8 bg-white" />
        <img src={sponsor2} alt="" className="rounded-2xl border-pink p-1 md:p-3 lg:p-8 bg-white" />
        <img src={sponsor3} alt="" className="rounded-2xl border-pink p-1 md:p-3 lg:p-8 bg-white" />
      </div>
      <div className="flex w-full justify-center bg-white absolute bottom-0">
        <p className="text-sm text-center my-8 ">
          Copyright © 2022 HexSchool.All rights reserved.</p>
      </div>
    </section>

  );
};

export default Footer;
