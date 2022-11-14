
import CharaBlue from '../assets/images/chara-b.png'
import CharaYellow from '../assets/images/chara-y.png'
import { useEffect, useRef, useState } from 'react'




const SectionB = () => {

  function useElementOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIsIntersecting] = useState(true);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return isIntersecting;
  }

  const AnimateIn = ({ from, to, children }) => {
    const ref = useRef(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles = {
      transition: "400ms ease-in-out"
    };
    return (
      <div
        ref={ref}
        style={
          onScreen
            ? {
              ...defaultStyles,
              ...to
            }
            : {
              ...defaultStyles,
              ...from
            }
        }
      >
        {children}
      </div>
    );
  };

  const ScaleIn1 = ({ children }) => (
    <AnimateIn
      from={{ scale: "1", translate: "-300px 0" }}
      to={{ scale: "1", translate: "0 0" }}>
      {children}
    </AnimateIn>
  );

  const ScaleIn2 = ({ children }) => (
    <AnimateIn
      from={{ scale: "1", translate: "300px 0" }}
      to={{ scale: "1", translate: "0 0" }}>
      {children}
    </AnimateIn>
  );

  const Animate = {
    ScaleIn1,
    ScaleIn2
  };


  return (
    <section id='section-b' className="relative flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="chara-box md:border">
          <Animate.ScaleIn1>
            <img src={CharaYellow} alt="" className='chara top-0 left-[-40%] md:top-[90%] lg:top-[-50vh]' />
          </Animate.ScaleIn1>
          <Animate.ScaleIn2>
            <img src={CharaBlue} alt="" className='chara left-[100px] top-[240px]  md:left-[20%] lg:top-[10vh]' />
          </Animate.ScaleIn2>
        </div>
        <div className="">
          <div className="absolute right-0 top-0 text m-4 ">
            <h2 className='white-border'>本屆主題</h2>
            <h2 className='p-2'>／ 互動式網頁設計</h2>
          </div>
          <div className="text absolute left-0 bottom-20  m-4">
            <h2 className='p-2'>UI 設計師 × 前端工程師</h2>
            <h2 className='white-border'>攜手合作</h2>
          </div>
        </div>



      </div>


    </section >

  );
};

export default SectionB;
