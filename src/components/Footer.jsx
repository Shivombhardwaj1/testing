import React from 'react'

const Footer = () => {
  return (
    <div className='min-w-[1000px]'>

<div className='grid grid-cols-4 text-white bg-amazonclone-purple pt-10 pb-20'  >
    <div><ul className='ml-[130px]'> <li className='font-bold'>Get to Know Us</li><li>About Us</li>
    <li>Careers</li>
    <li>Press Releases</li>
    <li>Amazon Science</li></ul>
    </div>
    <div><ul className='ml-[80px]'><li className='font-bold'>Connect with Us</li>
    <li>Facebook</li>
    <li>Twitter</li>
    <li>Instagram</li></ul>
    </div>
    <div><ul><li className='font-bold'>Make Money with Us</li><li>Sell on Amazon</li>
    <li>Sell under Amazon Accelerator</li>
    <li>Protect and Build Your Brand</li>
    <li>Amazon Global Selling</li>
    <li>Fulfilment by Amazon</li>
    <li>Advertise Your Products</li></ul>
    </div>
    <div><ul><li className='font-bold'>Let Us Help You</li>
<li>COVID-19 and Amazon
</li>
    <li>Your Account</li>
    <li>Returns Centre</li>
    <li>100% Purchase Protection</li>
    <li>Amazon App Download</li>
    <li>Help</li></ul>
    </div>
   
</div>
<div className='grid grid-cols-3  bg-amazonclone-purple'><div></div>
    <img className="h-[35px] w-[100px] ml-[150px] mb-5  "src={"../images/amazon.png"}alt="" />
    </div>
    </div>
  )
}

export default Footer