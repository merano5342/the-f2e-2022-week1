import { useState } from 'react';

import Hamburger from '../assets/images/hamburger.svg'
import Logo from '../assets/images/logo@2x.png'

const DATA_NAV_BTN = [
  {
    id: '1',
    title: '關卡資訊',
    url: 'https://2022.thef2e.com/news'
  },
  {
    id: '2',
    title: '作品列表',
    url: 'https://2022.thef2e.com/works'
  },
  {
    id: '3',
    title: '攻略資源',
    url: 'https://hackmd.io/ofJD4K7iSI65V19zxC7d0w'
  },
  {
    id: '4',
    title: '求職專區',
    url: 'https://2022.thef2e.com/jobs'
  },
]

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  return (
    <div className="nav h-[70px] px-3 flex justify-between items-center fixed z-30 top-0 bg-white w-full" id='nav'>
      <img src={Logo} alt="logo" className='w-[180px] m-2' />
      <div className="right flex items-center m-2">
        <div className="lg:flex gap-4 mr-4 hidden ">
          {DATA_NAV_BTN.map((item) => {
            return (<a key={item.id} href={item.url} className="text-purple">{item.title}</a>)
          })}
        </div>

        <div className="hidden md:block">
          <button className="btn btn-sign-up m-2 ">馬上報名</button>
          <button className="btn btn-sign-up m-2 bg-cyan text-purple">登入</button>
        </div>


        <img src={Hamburger}
          alt=""
          className='h-[20px] m-2 cursor-pointer lg:hidden'
          onClick={() => setBurgerOpen(pre => !pre)} />
        <div className="drop-down bg-white flex flex-col top-[70px] right-0 left-0 fixed z-30 " data-active={burgerOpen}
        > {DATA_NAV_BTN.map((item) => {
          return (<a key={item.id} className='text-purple hover:bg-cyan text-center text-xl py-2' href={item.url}>{item.title}</a>)
        })}
          <div className="block md:hidden ">
            <button className="btn btn-sign-up m-2 ">馬上報名</button>
            <button className="btn btn-sign-up m-2 bg-cyan text-purple">登入</button>
          </div>

        </div>
      </div>


    </div>


  );
};

export default Nav;
