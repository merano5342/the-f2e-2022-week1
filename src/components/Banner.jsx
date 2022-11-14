import Shape from '../assets/images/banner/banner-shape.png'
import Chara from '../assets/images/banner/banner-chara.png'
import Title from '../assets/images/banner/banner-title.png'
import Star from '../assets/images/banner/star.png'




const Banner = () => {
  return (
    <section className="banner relative pt-[100px] " id='banner'>
      <div className="flex justify-center">
        <img src={Chara} alt="Chara" className='chara absolute top-[36%] sm:top-[20%]' />

        <img src={Star} alt="Star" className='star absolute top-[80%] right-[20%]' />
        <img src={Star} alt="Star" className='star absolute bottom-[74%] left-[20%] ' />
        <img src={Star} alt="Star" className='star absolute bottom-[84%] left-[28%] h-[3rem]' />

        <img src={Title} alt="Title" className='title absolute top-[30%] sm:top-[20%] h-max-[470px]' />


      </div>
      <div className="number-box absolute bottom-[100px] flex right-0 left-0 mx-auto justify-between w-[400px]">
        <div className="text-center">
          <h2 className='text-cyan font-bold text-3xl'>1265</h2>
          <p className='text-white'>total</p>
        </div>
        <div className="text-center">
          <h2 className='text-cyan font-bold text-3xl'>1149</h2>
          <p className='text-white'>Personal</p>
        </div>
        <div className="text-center">
          <h2 className='text-cyan font-bold text-3xl'>45</h2>
          <p className='text-white'>Team</p>
        </div>
      </div>
      <img src={Shape} alt="Shape" className='shape px-4' />
    </section>
  );
};

export default Banner;
