import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={landingImages.navIcon}
              className="h-8"
              alt="Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
    </Link>
  )
}

export default Logo