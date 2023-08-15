import React from 'react'
import { ShoppingCartIcon, } from "@heroicons/react/24/outline";
import Search from './Search';
import PlaceIcon from '@mui/icons-material/Place';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
          <div className='flex'>
            <img className="h-[35px] w-[100px] m-2 mt-4 ml-5"src={"../images/amazon.png"}alt="" />
          </div>
            <div className='flex  relative items-center ml-2'><PlaceIcon/></div>
            
          
          <div className="pr-4 pl-4 mt-2">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Mohali,Punjab</div>
          </div>
          <div className='flex grow relative items-center'>
            <Search/>
          </div>
          <div>
          <div className='flex items-center mt-2'>
            <img className="h-[15px] w-[20px] m-2 mt-4 ml-5"src={"../images/flag.png"}alt="" />
            <div className='font-bold mt-1.5'> EN</div>
          </div>
            
          </div>
          <Link to={"/"}><div className="pr-4 pl-4 mt-2" >
            <div className="text-xs xl:text-sm">Hello, Signup</div>
            <div className="text-sm xl:text-base font-bold">Account & Lists</div>
          </div></Link>
          
          <div className="pr-4 pl-4 mt-2">
            <div className="text-xs xl:text-sm">Return</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <div className="flex pr-3 pl-3 pt-1">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                 3
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold mr-2">Cart</div>
            </div>
            </div>
            <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 font-semibold grow ">
            <DehazeIcon /> All
        <div>Prime</div>
        <div>Buy Again</div>
        <div>Amazon mini TV</div>
        <div>Gift Cards</div>
        <div>Sell</div>
        <div>Amazon Pay</div>
        <div>Coupon</div>
        <div>Amazon Business</div>
        <div>Baby</div>
        <div>Grocery Foods</div>

      </div>
     
    </header>
  )
}

export default Header