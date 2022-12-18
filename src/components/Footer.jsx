import sponsor1 from '../assets/images/9-l-a.png'
import sponsor2 from '../assets/images/9-l-b.png'
import sponsor3 from '../assets/images/9-l-c.png'


const Footer = () => {
  return (
    <section className="flex flex-col relative justify-center items-center" id="footer">

      <h2 className='p-10'>
        贊助單位
      </h2>
      <div className="flex flex-col max-w-4xl md:flex-row gap-10">
        <img src={sponsor1} alt="" className="w-40 rounded-2xl border-pink p-1 bg-white" />
        <img src={sponsor2} alt="" className="w-40 rounded-2xl border-pink p-1  bg-white" />
        <img src={sponsor3} alt="" className="w-40 rounded-2xl border-pink p-1  bg-white" />
      </div>
      <div className="flex w-full justify-center bg-white absolute bottom-0">
        <p className="text-sm text-center my-8 ">
          Copyright © 2022 HexSchool.All rights reserved.</p>
      </div>
    </section>

  );
};

export default Footer;