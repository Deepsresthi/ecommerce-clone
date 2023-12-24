import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
}   from "@heroicons/react/solid"

const Header = () => {
  return (
    <>
        <header>
            {/* {Top Nav} */}
              <div className='flex items-center flow-grow bg-amazon_blue p-1'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 px-2'>
                <Image
                    src='https://links.papareact.com/f90'
                    width={150}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer'
                      />  
                  </div>

                  <div className= 'hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center rounded-md flex-grow h-10 cursor-pointer '> 
                      <input type='text' className='p-2 h-full w-6 flex-grow rounded-l-md focus: outline-none' />
                      <SearchIcon className='h-12 p-4'/>
                  </div>  

                  <div className='flex items-center text-white text-xs space-x-6 mx-6 whitespace-nowrap'>
                      <div className='link'>
                            <p>Hello, Deep Sresthi</p>  
                            <p className='font-extrabold md:text-sm'>Account & List</p>
                      </div>
                        <div className='link'>
                            <p>Returns</p>
                            <p className='font-extrabold md:text-sm'>Orders</p>
                        </div>
                      <div className='relative link flex items-start'>
                          <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-md text-center text-black font-bold'>4</span>
                          <ShoppingCartIcon className='h-10' />
                          <p className='hidden md:inline font-extrabold md:text-sm mt-4'>Basket</p>
                      </div>
                  </div>
            </div>

              {/* {Bottom Nav} */}

              <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                  <p className='link flex items-center'>
                      <MenuIcon className='h-6 mr-1' />
                      All
                  </p>
                  <p className='link'>
                      Prime Video
                  </p>
                  <p className='link'>
                      Amaxon Business
                  </p>
                  <p className='link'>
                      Today's Deals
                  </p>
                  <p className='link hidden lg:inline-flex'>
                      Electronics
                  </p>
                  <p className='link hidden lg:inline-flex'>
                      Food
                  </p>
                  <p className='link hidden lg:inline-flex'>
                      Buy Again
                  </p>

              </div>
        </header>
    </>
  )
}

export default Header